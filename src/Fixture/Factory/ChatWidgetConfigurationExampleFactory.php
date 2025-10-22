<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Fixture\Factory;

use Guiziweb\SyliusAIPlatformBundle\Repository\AgentConfigurationRepositoryInterface;
use Guiziweb\SyliusShoppingAssistantPlugin\Entity\ChatWidgetConfiguration;
use Sylius\Bundle\CoreBundle\Fixture\Factory\ExampleFactoryInterface;
use Sylius\Component\Channel\Repository\ChannelRepositoryInterface;
use Sylius\Component\Core\Model\ChannelInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

final class ChatWidgetConfigurationExampleFactory implements ExampleFactoryInterface
{
    private OptionsResolver $optionsResolver;

    /**
     * @param ChannelRepositoryInterface<ChannelInterface> $channelRepository
     */
    public function __construct(
        private readonly ChannelRepositoryInterface $channelRepository,
        private readonly AgentConfigurationRepositoryInterface $agentConfigurationRepository,
    ) {
        $this->optionsResolver = new OptionsResolver();

        $this->configureOptions($this->optionsResolver);
    }

    public function create(array $options = []): ChatWidgetConfiguration
    {
        $options = $this->optionsResolver->resolve($options);

        $chatWidgetConfiguration = new ChatWidgetConfiguration();
        $chatWidgetConfiguration->setEnabled($options['enabled']);

        // Set channel
        $channel = $this->channelRepository->findOneBy(['code' => $options['channel']]);
        \assert($channel instanceof ChannelInterface);
        $chatWidgetConfiguration->setChannel($channel);

        // Set agent
        $agent = $this->agentConfigurationRepository->findOneBy(['code' => $options['agent']]);
        if (null !== $agent) {
            $chatWidgetConfiguration->setAgent($agent);
        }

        // Set welcome message translations
        foreach ($options['welcome_message'] as $localeCode => $message) {
            $chatWidgetConfiguration->setCurrentLocale($localeCode);
            $chatWidgetConfiguration->setFallbackLocale($localeCode);
            $chatWidgetConfiguration->setWelcomeMessage($message);
        }

        return $chatWidgetConfiguration;
    }

    protected function configureOptions(OptionsResolver $resolver): void
    {
        $resolver
            ->setRequired('channel')
            ->setAllowedTypes('channel', 'string')

            ->setRequired('agent')
            ->setAllowedTypes('agent', 'string')

            ->setDefault('enabled', true)
            ->setAllowedTypes('enabled', 'bool')

            ->setRequired('welcome_message')
            ->setAllowedTypes('welcome_message', 'array')
        ;
    }
}