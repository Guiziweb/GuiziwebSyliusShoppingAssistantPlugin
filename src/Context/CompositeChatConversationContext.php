<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Context;

use Guiziweb\SyliusShoppingAssistantPlugin\Entity\ChatConversation;
use Guiziweb\SyliusShoppingAssistantPlugin\Exception\ChatConversationNotFoundException;
use Laminas\Stdlib\PriorityQueue;

final class CompositeChatConversationContext implements ChatConversationContextInterface
{
    /** @var PriorityQueue<ChatConversationContextInterface, int> */
    private PriorityQueue $contexts;

    public function __construct()
    {
        $this->contexts = new PriorityQueue();
    }

    public function addContext(ChatConversationContextInterface $context, int $priority = 0): void
    {
        $this->contexts->insert($context, $priority);
    }

    public function getConversation(): ChatConversation
    {
        foreach ($this->contexts as $context) {
            try {
                return $context->getConversation();
            } catch (ChatConversationNotFoundException) {
                continue;
            }
        }

        throw new ChatConversationNotFoundException('No conversation context was able to provide a conversation');
    }
}
