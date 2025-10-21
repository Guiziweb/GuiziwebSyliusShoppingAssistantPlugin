<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Entity;

use Guiziweb\SyliusAIPlatformBundle\Entity\AgentConfiguration;
use Sylius\Component\Channel\Model\ChannelInterface;
use Sylius\Resource\Metadata\AsResource;
use Sylius\Resource\Metadata\BulkDelete;
use Sylius\Resource\Metadata\Create;
use Sylius\Resource\Metadata\Delete;
use Sylius\Resource\Metadata\Index;
use Sylius\Resource\Metadata\Update;
use Sylius\Resource\Model\ResourceInterface;
use Sylius\Resource\Model\TranslatableInterface;
use Sylius\Resource\Model\TranslatableTrait;
use Sylius\Resource\Model\TranslationInterface;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;

#[UniqueEntity(fields: ['channel'], message: 'guiziweb.chat_widget_configuration.channel.unique')]
#[AsResource(
    alias: 'guiziweb.chat_widget_configuration',
    section: 'admin',
    formType: \Guiziweb\SyliusShoppingAssistantPlugin\Form\Type\ChatWidgetConfigurationType::class,
    templatesDir: '@SyliusAdmin/shared/crud',
    routePrefix: '/admin',
    operations: [
        new Index(grid: 'guiziweb_chat_widget_configuration'),
        new Create(),
        new Update(),
        new Delete(),
        new BulkDelete(),
    ],
)]
/**
 * @method ChatWidgetConfigurationTranslation getTranslation(?string $locale = null)
 */
class ChatWidgetConfiguration implements ResourceInterface, TranslatableInterface
{
    use TranslatableTrait {
        __construct as private initializeTranslationsCollection;
    }

    private ?int $id = null;

    #[Assert\NotNull(message: 'guiziweb.chat_widget_configuration.channel.not_blank')]
    private ?ChannelInterface $channel = null;

    #[Assert\NotNull(message: 'guiziweb.chat_widget_configuration.agent.not_blank')]
    private ?AgentConfiguration $agent = null;

    private bool $enabled = true;

    public function __construct()
    {
        $this->initializeTranslationsCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getChannel(): ?ChannelInterface
    {
        return $this->channel;
    }

    public function setChannel(?ChannelInterface $channel): self
    {
        $this->channel = $channel;

        return $this;
    }

    public function getAgent(): ?AgentConfiguration
    {
        return $this->agent;
    }

    public function setAgent(?AgentConfiguration $agent): self
    {
        $this->agent = $agent;

        return $this;
    }

    public function isEnabled(): bool
    {
        return $this->enabled;
    }

    public function setEnabled(bool $enabled): self
    {
        $this->enabled = $enabled;

        return $this;
    }

    public function getWelcomeMessage(): string
    {
        $translation = $this->getTranslation();
        assert($translation instanceof ChatWidgetConfigurationTranslation);

        $message = $translation->getWelcomeMessage();
        assert(is_string($message)); // NotBlank validation ensures this after entity is persisted

        return $message;
    }

    public function setWelcomeMessage(?string $welcomeMessage): self
    {
        $translation = $this->getTranslation();
        assert($translation instanceof ChatWidgetConfigurationTranslation);
        $translation->setWelcomeMessage($welcomeMessage);

        return $this;
    }

    protected function createTranslation(): TranslationInterface
    {
        return new ChatWidgetConfigurationTranslation();
    }
}
