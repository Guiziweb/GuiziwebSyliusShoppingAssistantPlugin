<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Manager;

use Doctrine\ORM\EntityManagerInterface;
use Guiziweb\SyliusShoppingAssistantPlugin\Context\ChatConversationContextInterface;
use Guiziweb\SyliusShoppingAssistantPlugin\Entity\ChatConversation;
use Guiziweb\SyliusShoppingAssistantPlugin\Exception\ChatConversationNotFoundException;
use Sylius\Component\Channel\Context\ChannelContextInterface;
use Sylius\Component\Core\Model\ChannelInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

final readonly class ConversationManager implements ConversationManagerInterface
{
    private const SESSION_KEY_CONVERSATION_ID = 'guiziweb_shopping_assistant_conversation_id';

    public function __construct(
        private ChatConversationContextInterface $conversationContext,
        private ChannelContextInterface $channelContext,
        private EntityManagerInterface $entityManager,
    ) {
    }

    public function getOrCreate(SessionInterface $session): ChatConversation
    {
        // Try to get existing conversation via context
        try {
            return $this->conversationContext->getConversation();
        } catch (ChatConversationNotFoundException) {
            // No conversation found, create a new one
        }

        $channel = $this->channelContext->getChannel();

        if (!$channel instanceof ChannelInterface) {
            throw new \RuntimeException('Channel not found in context.');
        }

        // Create new conversation for anonymous user
        $conversation = new ChatConversation();
        $conversation->setChannel($channel);
        $conversation->setSessionId($session->getId());

        $this->entityManager->persist($conversation);
        $this->entityManager->flush();

        // Store conversation ID in session for SessionBasedChatConversationContext
        $session->set(self::SESSION_KEY_CONVERSATION_ID, $conversation->getId());

        return $conversation;
    }

    public function save(ChatConversation $conversation): void
    {
        $this->entityManager->flush();
    }
}
