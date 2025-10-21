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

namespace Guiziweb\SyliusShoppingAssistantPlugin\Form\EventListener;

use Guiziweb\SyliusAIPlatformBundle\Entity\AgentConfiguration;
use Guiziweb\SyliusAIPlatformBundle\Repository\AgentConfigurationRepository;
use Guiziweb\SyliusAIPlatformBundle\Repository\AgentConfigurationRepositoryInterface;
use Guiziweb\SyliusShoppingAssistantPlugin\Entity\ChatWidgetConfiguration;
use Sylius\Component\Channel\Model\ChannelInterface;
use Sylius\Component\Channel\Repository\ChannelRepositoryInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\Form\FormInterface;

final class FilterAgentsByChannelSubscriber implements EventSubscriberInterface
{
    /**
     * @param AgentConfigurationRepositoryInterface<AgentConfiguration> $agentRepository
     * @param ChannelRepositoryInterface<ChannelInterface> $channelRepository
     */
    public function __construct(
        private readonly AgentConfigurationRepositoryInterface $agentRepository,
        private readonly ChannelRepositoryInterface $channelRepository,
        private readonly FormFactoryInterface $formFactory,
    ) {
    }

    public static function getSubscribedEvents(): array
    {
        return [
            FormEvents::PRE_SET_DATA => 'preSetData',
            FormEvents::PRE_SUBMIT => 'preSubmit',
        ];
    }

    public function preSetData(FormEvent $event): void
    {
        /** @var ChatWidgetConfiguration|null $data */
        $data = $event->getData();
        if (null === $data) {
            return;
        }

        $channel = $data->getChannel();
        if (null === $channel) {
            return;
        }

        $agent = $data->getAgent();
        $form = $event->getForm();

        $form->add($this->createAgentChoiceField($channel, $agent));
    }

    public function preSubmit(FormEvent $event): void
    {
        $data = $event->getData();
        if (!\is_array($data)) {
            return;
        }

        // Check if channel exists in data
        if (!\array_key_exists('channel', $data)) {
            return;
        }

        $channelCode = $data['channel'];
        if ('' === $channelCode || null === $channelCode) {
            // No channel selected, show all agents or empty list
            $form = $event->getForm();
            $form->add($this->createAgentChoiceField(null));

            return;
        }

        // Find channel by code from submitted data
        $channel = $this->channelRepository->findOneBy(['code' => $channelCode]);
        \assert($channel instanceof ChannelInterface);

        $form = $event->getForm();
        $form->add($this->createAgentChoiceField($channel));
    }

    private function createAgentChoiceField(?ChannelInterface $channel, ?AgentConfiguration $currentAgent = null): FormInterface
    {
        /** @var AgentConfigurationRepository $agentRepository */
        $agentRepository = $this->agentRepository;

        $queryBuilder = $agentRepository->createQueryBuilder('a')
            ->where('a.enabled = :enabled')
            ->setParameter('enabled', true)
            ->orderBy('a.name', 'ASC');

        if ($channel) {
            $queryBuilder
                ->andWhere('a.channel = :channel')
                ->setParameter('channel', $channel);
        }

        return $this->formFactory->createNamed('agent', EntityType::class, $currentAgent, [
            'auto_initialize' => false,
            'class' => AgentConfiguration::class,
            'label' => 'guiziweb.ui.agent',
            'placeholder' => 'guiziweb.ui.select_agent',
            'choice_label' => 'name',
            'required' => true,
            'query_builder' => $queryBuilder,
        ]);
    }
}
