<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Entity;

use Sylius\Component\Resource\Model\AbstractTranslation;
use Sylius\Component\Resource\Model\TranslationInterface;
use Sylius\Resource\Model\ResourceInterface;
use Symfony\Component\Validator\Constraints as Assert;

class ChatWidgetConfigurationTranslation extends AbstractTranslation implements ResourceInterface, TranslationInterface
{
    private ?int $id = null;

    #[Assert\NotBlank(message: 'guiziweb.chat_widget_configuration.welcome_message.not_blank')]
    private ?string $welcomeMessage = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getWelcomeMessage(): ?string
    {
        return $this->welcomeMessage;
    }

    public function setWelcomeMessage(?string $welcomeMessage): void
    {
        $this->welcomeMessage = $welcomeMessage;
    }
}
