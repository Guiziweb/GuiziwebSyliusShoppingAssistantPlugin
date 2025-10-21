<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Context;

use Guiziweb\SyliusShoppingAssistantPlugin\Entity\ChatConversation;
use Guiziweb\SyliusShoppingAssistantPlugin\Exception\ChatConversationNotFoundException;

interface ChatConversationContextInterface
{
    /**
     * @throws ChatConversationNotFoundException
     */
    public function getConversation(): ChatConversation;
}
