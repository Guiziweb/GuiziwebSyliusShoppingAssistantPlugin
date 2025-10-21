<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Processor;

use Symfony\AI\Platform\Message\MessageBag;

interface ChatMessageProcessorInterface
{
    /**
     * Process chat message through AI agent and return response content.
     */
    public function process(MessageBag $messages): string;
}
