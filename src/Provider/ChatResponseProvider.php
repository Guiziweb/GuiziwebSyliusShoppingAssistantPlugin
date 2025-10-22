<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Provider;

use Guiziweb\SyliusShoppingAssistantPlugin\Collector\ChatToolMetadataCollector;
use Guiziweb\SyliusShoppingAssistantPlugin\EventSubscriber\PersistToolCallMessagesSubscriber;
use Guiziweb\SyliusShoppingAssistantPlugin\Manager\ConversationManagerInterface;
use Guiziweb\SyliusShoppingAssistantPlugin\Processor\ChatMessageProcessorInterface;
use Psr\Log\LoggerInterface;
use Symfony\AI\Platform\Message\Message;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

final readonly class ChatResponseProvider implements ChatResponseProviderInterface
{
    public function __construct(
        private ConversationManagerInterface $conversationManager,
        private ChatMessageProcessorInterface $messageProcessor,
        private ChatToolMetadataCollector $metadataCollector,
        private PersistToolCallMessagesSubscriber $persistToolCallMessagesSubscriber,
        private LoggerInterface $aiLogger,
    ) {
    }

    public function createResponse(Request $request, string $message): JsonResponse
    {
        $session = $request->getSession();

        try {
            $conversation = $this->conversationManager->getOrCreate($session);

            $messages = $conversation->getMessages();

            $messages->add(Message::ofUser($message));

            $this->persistToolCallMessagesSubscriber->setMessageBag($messages);

            $content = $this->messageProcessor->process($messages);

            $products = $this->metadataCollector->getProducts();
            $redirectUrl = $this->metadataCollector->getRedirectUrl();

            $assistantMessage = Message::ofAssistant($content);

            $metadata = [];

            if ($products) {
                $metadata['products'] = $products;
            }
            if ($redirectUrl) {
                $metadata['redirect_url'] = $redirectUrl;
            }
            if ($metadata !== []) {
                $assistantMessage->getMetadata()->set($metadata);
            }

            $messages->add($assistantMessage);

            $this->aiLogger->debug('About to serialize MessageBag', [
                'message_count' => count($messages->getMessages()),
            ]);

            $conversation->setMessages($messages);

            $this->aiLogger->debug('MessageBag serialized successfully');

            $this->conversationManager->save($conversation);

            $this->metadataCollector->clear();

            return new JsonResponse([
                'response' => $content,
                'products' => $products,
                'redirect_url' => $redirectUrl,
            ]);
        } catch (\Throwable $e) {
            $this->aiLogger->error('Chat response error', [
                'exception' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);

            return new JsonResponse([
                'error' => 'An error occurred while processing your message. Please try again.',
            ], 500);
        } finally {
            $this->persistToolCallMessagesSubscriber->clearMessageBag();
        }
    }
}
