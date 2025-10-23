<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Serializer;

use Symfony\AI\Platform\Message\AssistantMessage;
use Symfony\AI\Platform\Message\Content\Text;
use Symfony\AI\Platform\Message\MessageBag;
use Symfony\AI\Platform\Message\MessageInterface;
use Symfony\AI\Platform\Message\Role;
use Symfony\AI\Platform\Message\SystemMessage;
use Symfony\AI\Platform\Message\ToolCallMessage;
use Symfony\AI\Platform\Message\UserMessage;
use Symfony\AI\Platform\Result\ToolCall;

/**
 * Serializes MessageBag to/from JSON-compatible array format.
 *
 * This serializer converts MessageBag objects to plain arrays that can be
 * JSON-encoded for database storage. It preserves all message types, metadata,
 * and tool calls while being resilient to code changes (unlike PHP serialize).
 */
final class MessageBagSerializer
{
    /**
     * Convert MessageBag to JSON-serializable array.
     *
     * @return array{messages: list<array>, metadata: array}
     */
    public static function toArray(MessageBag $messageBag): array
    {
        $messages = [];

        foreach ($messageBag->getMessages() as $message) {
            $messages[] = self::serializeMessage($message);
        }

        return [
            'messages' => $messages,
            'metadata' => $messageBag->getMetadata()->all(),
        ];
    }

    /**
     * Reconstruct MessageBag from array.
     */
    public static function fromArray(array $data): MessageBag
    {
        if (!isset($data['messages']) || !\is_array($data['messages'])) {
            return new MessageBag();
        }

        $messages = [];
        foreach ($data['messages'] as $messageData) {
            $message = self::deserializeMessage($messageData);
            if (null !== $message) {
                $messages[] = $message;
            }
        }

        $messageBag = new MessageBag(...$messages);

        // Restore metadata if present
        if (isset($data['metadata']) && \is_array($data['metadata']) && [] !== $data['metadata']) {
            $messageBag->getMetadata()->set($data['metadata']);
        }

        return $messageBag;
    }

    /**
     * @return array{type: string, id: string, content?: mixed, toolCalls?: array, toolCall?: array, metadata: array}
     */
    private static function serializeMessage(MessageInterface $message): array
    {
        $data = [
            'type' => $message->getRole()->value,
            'id' => $message->getId()->toRfc4122(),
            'metadata' => $message->getMetadata()->all(),
        ];

        if ($message instanceof UserMessage) {
            $content = [];
            foreach ($message->getContent() as $contentPart) {
                if ($contentPart instanceof Text) {
                    $content[] = [
                        'type' => 'text',
                        'text' => $contentPart->getText(),
                    ];
                }
            }
            $data['content'] = $content;
        } elseif ($message instanceof AssistantMessage) {
            $content = $message->getContent();
            $data['content'] = \is_string($content) || null === $content ? $content : (string) $content;

            if ($message->hasToolCalls()) {
                $toolCalls = [];
                foreach ($message->getToolCalls() ?? [] as $toolCall) {
                    $toolCalls[] = [
                        'id' => $toolCall->getId(),
                        'name' => $toolCall->getName(),
                        'arguments' => $toolCall->getArguments(),
                    ];
                }
                $data['toolCalls'] = $toolCalls;
            }
        } elseif ($message instanceof ToolCallMessage) {
            $toolCall = $message->getToolCall();
            $data['toolCall'] = [
                'id' => $toolCall->getId(),
                'name' => $toolCall->getName(),
                'arguments' => $toolCall->getArguments(),
            ];
            $data['content'] = $message->getContent();
        } elseif ($message instanceof SystemMessage) {
            $data['content'] = $message->getContent();
        }

        return $data;
    }

    private static function deserializeMessage(array $data): ?MessageInterface
    {
        if (!isset($data['type']) || !\is_string($data['type'])) {
            return null;
        }

        $role = Role::tryFrom($data['type']);
        if (null === $role) {
            return null;
        }

        // Reconstruct based on role
        $message = match ($role) {
            Role::User => self::deserializeUserMessage($data),
            Role::Assistant => self::deserializeAssistantMessage($data),
            Role::ToolCall => self::deserializeToolCallMessage($data),
            Role::System => self::deserializeSystemMessage($data),
        };

        if (null === $message) {
            return null;
        }

        // Restore metadata if present
        if (isset($data['metadata']) && \is_array($data['metadata']) && [] !== $data['metadata']) {
            $message->getMetadata()->set($data['metadata']);
        }

        // Note: UUID from JSON is preserved for debugging purposes but not restored.
        // Messages will get new UUIDs on deserialization, which is fine for our use case.

        return $message;
    }

    private static function deserializeUserMessage(array $data): ?UserMessage
    {
        if (!isset($data['content']) || !\is_array($data['content'])) {
            return null;
        }

        $contentParts = [];
        foreach ($data['content'] as $contentData) {
            if (
                \is_array($contentData)
                && isset($contentData['type'])
                && 'text' === $contentData['type']
                && isset($contentData['text'])
                && \is_string($contentData['text'])
            ) {
                $contentParts[] = new Text($contentData['text']);
            }
        }

        return new UserMessage(...$contentParts);
    }

    private static function deserializeAssistantMessage(array $data): ?AssistantMessage
    {
        $content = null;
        if (isset($data['content']) && \is_string($data['content'])) {
            $content = $data['content'];
        }

        $toolCalls = null;
        if (isset($data['toolCalls']) && \is_array($data['toolCalls'])) {
            $toolCalls = [];
            foreach ($data['toolCalls'] as $toolCallData) {
                if (
                    \is_array($toolCallData)
                    && isset($toolCallData['id'], $toolCallData['name'], $toolCallData['arguments'])
                    && \is_string($toolCallData['id'])
                    && \is_string($toolCallData['name'])
                    && \is_array($toolCallData['arguments'])
                ) {
                    $toolCalls[] = new ToolCall(
                        $toolCallData['id'],
                        $toolCallData['name'],
                        $toolCallData['arguments'],
                    );
                }
            }
        }

        return new AssistantMessage($content, $toolCalls);
    }

    private static function deserializeToolCallMessage(array $data): ?ToolCallMessage
    {
        if (
            !isset($data['toolCall'], $data['content'])
            || !\is_array($data['toolCall'])
            || !\is_string($data['content'])
        ) {
            return null;
        }

        $toolCallData = $data['toolCall'];
        if (
            !isset($toolCallData['id'], $toolCallData['name'], $toolCallData['arguments'])
            || !\is_string($toolCallData['id'])
            || !\is_string($toolCallData['name'])
            || !\is_array($toolCallData['arguments'])
        ) {
            return null;
        }

        $toolCall = new ToolCall(
            $toolCallData['id'],
            $toolCallData['name'],
            $toolCallData['arguments'],
        );

        return new ToolCallMessage($toolCall, $data['content']);
    }

    private static function deserializeSystemMessage(array $data): ?SystemMessage
    {
        if (!isset($data['content']) || !\is_string($data['content'])) {
            return null;
        }

        return new SystemMessage($data['content']);
    }
}
