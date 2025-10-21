<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Provider;

use Guiziweb\SyliusShoppingAssistantPlugin\Entity\ChatWidgetConfiguration;
use Guiziweb\SyliusShoppingAssistantPlugin\Repository\ChatWidgetConfigurationRepository;
use Sylius\Component\Channel\Context\ChannelContextInterface;

final class ChatWidgetConfigurationProvider
{
    public function __construct(
        private readonly ChatWidgetConfigurationRepository $chatWidgetRepository,
        private readonly ChannelContextInterface $channelContext,
    ) {
    }

    public function getConfiguration(): ?ChatWidgetConfiguration
    {
        $channel = $this->channelContext->getChannel();

        $config = $this->chatWidgetRepository->findOneByChannel($channel);

        if (!$config instanceof ChatWidgetConfiguration || !$config->isEnabled()) {
            return null;
        }

        return $config;
    }
}
