<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Form\Type;

use Guiziweb\SyliusShoppingAssistantPlugin\Entity\ChatWidgetConfiguration;
use Guiziweb\SyliusShoppingAssistantPlugin\Form\EventListener\FilterAgentsByChannelSubscriber;
use Sylius\Bundle\ChannelBundle\Form\Type\ChannelChoiceType;
use Sylius\Bundle\ResourceBundle\Form\Type\ResourceTranslationsType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

final class ChatWidgetConfigurationType extends AbstractType
{
    public function __construct(
        private readonly FilterAgentsByChannelSubscriber $filterAgentsByChannelSubscriber,
    ) {
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('enabled', CheckboxType::class, [
                'label' => 'guiziweb.ui.enabled',
                'required' => false,
            ])
            ->add('channel', ChannelChoiceType::class, [
                'label' => 'guiziweb.ui.channel',
                'required' => true,
            ])
            ->add('translations', ResourceTranslationsType::class, [
                'entry_type' => ChatWidgetConfigurationTranslationType::class,
                'label' => 'sylius.ui.translations',
            ])
            ->addEventSubscriber($this->filterAgentsByChannelSubscriber)
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ChatWidgetConfiguration::class,
        ]);
    }
}
