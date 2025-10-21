<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Context;

use Guiziweb\SyliusShoppingAssistantPlugin\Attribute\AsChatConversationContext;
use Guiziweb\SyliusShoppingAssistantPlugin\Entity\ChatConversation;
use Guiziweb\SyliusShoppingAssistantPlugin\Exception\ChatConversationNotFoundException;
use Guiziweb\SyliusShoppingAssistantPlugin\Repository\ChatConversationRepository;
use Sylius\Component\Channel\Context\ChannelContextInterface;
use Sylius\Component\Channel\Context\ChannelNotFoundException;
use Sylius\Component\Core\Model\ChannelInterface;
use Symfony\Component\HttpFoundation\RequestStack;

#[AsChatConversationContext(priority: 50)]
final class SessionBasedChatConversationContext implements ChatConversationContextInterface
{
    private const SESSION_KEY = 'guiziweb_shopping_assistant_conversation_id';

    public function __construct(
        private ChatConversationRepository $conversationRepository,
        private ChannelContextInterface $channelContext,
        private RequestStack $requestStack,
    ) {
    }

    public function getConversation(): ChatConversation
    {
        $session = $this->requestStack->getSession();

        if (!$session->has(self::SESSION_KEY)) {
            throw new ChatConversationNotFoundException('No conversation ID found in session');
        }

        $conversationId = $session->get(self::SESSION_KEY);

        if (!is_int($conversationId)) {
            $session->remove(self::SESSION_KEY);

            throw new ChatConversationNotFoundException('Invalid conversation ID in session');
        }

        try {
            $channel = $this->channelContext->getChannel();
        } catch (ChannelNotFoundException $exception) {
            throw new ChatConversationNotFoundException('Channel not found in context', $exception);
        }

        if (!$channel instanceof ChannelInterface) {
            throw new ChatConversationNotFoundException('Invalid channel type');
        }

        $conversation = $this->conversationRepository->find($conversationId);

        if (!$conversation instanceof ChatConversation) {
            $session->remove(self::SESSION_KEY);

            throw new ChatConversationNotFoundException('Conversation not found in database');
        }

        if ($conversation->getChannel()?->getId() !== $channel->getId()) {
            $session->remove(self::SESSION_KEY);

            throw new ChatConversationNotFoundException('Conversation channel mismatch');
        }

        // If conversation has been migrated to a customer, reject it for anonymous users
        if ($conversation->getCustomer() !== null) {
            $session->remove(self::SESSION_KEY);

            throw new ChatConversationNotFoundException('Conversation belongs to a customer');
        }

        return $conversation;
    }
}
