<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Exception;

final class ChatConversationNotFoundException extends \RuntimeException
{
    public function __construct(?string $message = null, ?\Exception $previousException = null)
    {
        parent::__construct(
            $message ?? 'Unable to find the current chat conversation.',
            0,
            $previousException,
        );
    }
}
