<?php

declare(strict_types=1);

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Guiziweb\SyliusShoppingAssistantPlugin\Processor;

use Guiziweb\SyliusAIPlatformBundle\Entity\AgentConfiguration;
use Guiziweb\SyliusAIPlatformBundle\Factory\AgentFactory;
use Guiziweb\SyliusShoppingAssistantPlugin\Entity\ChatWidgetConfiguration;
use Guiziweb\SyliusShoppingAssistantPlugin\Provider\ChatWidgetConfigurationProvider;
use Psr\Log\LoggerInterface;
use Sylius\Component\Locale\Context\LocaleContextInterface;
use Symfony\AI\Platform\Message\MessageBag;
use Symfony\AI\Platform\Message\SystemMessage;

final readonly class ChatMessageProcessor implements ChatMessageProcessorInterface
{
    public function __construct(
        private AgentFactory $agentFactory,
        private ChatWidgetConfigurationProvider $chatWidgetConfigurationProvider,
        private LocaleContextInterface $localeContext,
        private LoggerInterface $aiLogger,
    ) {
    }

    public function process(MessageBag $messages): string
    {
        // Get widget configuration for current channel
        $widgetConfig = $this->chatWidgetConfigurationProvider->getConfiguration();
        \assert($widgetConfig instanceof ChatWidgetConfiguration);

        $localeCode = $this->localeContext->getLocaleCode();
        $languageMessage = new SystemMessage("Respond in the language: {$localeCode}");
        $messagesWithLocale = $messages->prepend($languageMessage);

        $agentConfiguration = $widgetConfig->getAgent();
        \assert($agentConfiguration instanceof AgentConfiguration);
        $agent = $this->agentFactory->createFromEntity($agentConfiguration);

        $this->aiLogger->debug('Processing chat message', [
            'locale' => $localeCode,
            'message_count' => \count($messagesWithLocale->getMessages()),
        ]);

        $result = $agent->call($messagesWithLocale, ['stream' => false]);

        $this->aiLogger->debug('Agent call completed');

        $content = $result->getContent();
        \assert(\is_string($content));

        return $content;
    }
}
