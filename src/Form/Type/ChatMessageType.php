<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\NotBlank;

final class ChatMessageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('message', TextType::class, [
                'label' => false,
                'attr' => [
                    'placeholder' => 'Type your message...',
                    'autocomplete' => 'off',
                    'class' => 'form-control',
                ],
                'constraints' => [
                    new NotBlank(['message' => 'Please enter a message']),
                ],
            ])
        ;
    }

    public function getBlockPrefix(): string
    {
        return 'chat';
    }
}
