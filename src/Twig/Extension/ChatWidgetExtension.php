<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Twig\Extension;

use Guiziweb\SyliusShoppingAssistantPlugin\Provider\ChatWidgetConfigurationProvider;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

final class ChatWidgetExtension extends AbstractExtension
{
    public function __construct(
        private readonly ChatWidgetConfigurationProvider $chatWidgetConfigurationProvider,
    ) {
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('is_chat_widget_enabled', [$this, 'isChatWidgetEnabled']),
        ];
    }

    public function isChatWidgetEnabled(): bool
    {
        $config = $this->chatWidgetConfigurationProvider->getConfiguration();

        return null !== $config;
    }
}
