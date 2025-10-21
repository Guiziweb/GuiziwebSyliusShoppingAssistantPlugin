<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\EventSubscriber;

use Symfony\AI\Agent\Toolbox\Event\ToolCallsExecuted;
use Symfony\AI\Agent\Toolbox\ToolResultConverter;
use Symfony\AI\Platform\Message\Message;
use Symfony\AI\Platform\Message\MessageBag;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * Persists ToolCallMessage and ToolCallResultMessage to the conversation history.
 *
 * Due to how Symfony AI Agent works, keepToolMessages doesn't function properly when
 * InputProcessors clone the MessageBag (like SystemPromptInputProcessor does with prepend()).
 * This subscriber manually adds tool messages to the original MessageBag to ensure
 * the AI has access to tool results across the entire conversation.
 */
final class PersistToolCallMessagesSubscriber implements EventSubscriberInterface
{
    private ?MessageBag $messageBag = null;

    private readonly ToolResultConverter $resultConverter;

    public function __construct()
    {
        $this->resultConverter = new ToolResultConverter();
    }

    public static function getSubscribedEvents(): array
    {
        return [
            ToolCallsExecuted::class => 'onToolCallsExecuted',
        ];
    }

    /**
     * Set the MessageBag where tool messages should be persisted.
     */
    public function setMessageBag(MessageBag $messageBag): void
    {
        $this->messageBag = $messageBag;
    }

    /**
     * Clear the MessageBag reference after processing.
     */
    public function clearMessageBag(): void
    {
        $this->messageBag = null;
    }

    public function onToolCallsExecuted(ToolCallsExecuted $event): void
    {
        if (!$this->messageBag) {
            // No MessageBag set, skip
            return;
        }

        $toolResults = $event->getToolResults();

        // For each tool result, add ToolCallMessage with the result
        foreach ($toolResults as $toolResult) {
            $toolCall = $toolResult->getToolCall();

            // Add AssistantMessage with tool call
            $this->messageBag->add(Message::ofAssistant(toolCalls: [$toolCall]));

            // Add ToolCallResultMessage (convert result to string)
            $convertedResult = $this->resultConverter->convert($toolResult);
            $content = $convertedResult ?? '';
            $this->messageBag->add(Message::ofToolCall($toolCall, $content));
        }
    }
}
