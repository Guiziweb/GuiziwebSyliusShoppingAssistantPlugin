<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Form\Type;

use Guiziweb\SyliusShoppingAssistantPlugin\Entity\ChatWidgetConfigurationTranslation;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

final class ChatWidgetConfigurationTranslationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('welcomeMessage', TextareaType::class, [
                'label' => 'guiziweb.ui.welcome_message',
                'required' => true,
                'help' => 'guiziweb.ui.welcome_message_help',
                'attr' => [
                    'rows' => 3,
                    'placeholder' => 'guiziweb.ui.welcome_message_placeholder',
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ChatWidgetConfigurationTranslation::class,
        ]);
    }

    public function getBlockPrefix(): string
    {
        return 'guiziweb_chat_widget_configuration_translation';
    }
}
