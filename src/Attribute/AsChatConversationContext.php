<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Attribute;

#[\Attribute(\Attribute::TARGET_CLASS)]
final class AsChatConversationContext
{
    public const SERVICE_TAG = 'guiziweb.chat_conversation_context';

    public function __construct(
        private int $priority = 0,
    ) {
    }

    public function getPriority(): int
    {
        return $this->priority;
    }
}
