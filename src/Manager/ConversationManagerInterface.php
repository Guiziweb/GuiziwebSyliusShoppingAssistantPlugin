<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Manager;

use Guiziweb\SyliusShoppingAssistantPlugin\Entity\ChatConversation;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

interface ConversationManagerInterface
{
    public function getOrCreate(SessionInterface $session): ChatConversation;

    public function save(ChatConversation $conversation): void;
}
