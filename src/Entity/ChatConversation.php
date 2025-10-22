<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Entity;

use Sylius\Component\Channel\Model\ChannelInterface;
use Sylius\Component\Customer\Model\CustomerInterface;
use Sylius\Resource\Metadata\AsResource;
use Sylius\Resource\Metadata\BulkDelete;
use Sylius\Resource\Metadata\Delete;
use Sylius\Resource\Metadata\Index;
use Sylius\Resource\Metadata\Show;
use Sylius\Resource\Model\ResourceInterface;
use Symfony\AI\Platform\Message\AssistantMessage;
use Symfony\AI\Platform\Message\Content\Text;
use Symfony\AI\Platform\Message\MessageBag;
use Symfony\AI\Platform\Message\Role;
use Symfony\AI\Platform\Message\SystemMessage;
use Symfony\AI\Platform\Message\ToolCallMessage;
use Symfony\AI\Platform\Message\UserMessage;
use Symfony\AI\Platform\Metadata\Metadata;
use Symfony\AI\Platform\Result\ToolCall;
use Symfony\AI\Platform\Result\ToolCallResult;
use Symfony\Component\Uid\UuidV7;

#[AsResource(
    alias: 'guiziweb.chat_conversation',
    section: 'admin',
    templatesDir: '@SyliusAdmin/shared/crud',
    routePrefix: '/admin',
    operations: [
        new Index(grid: 'guiziweb_chat_conversation'),
        new Show(),
        new Delete(),
        new BulkDelete(),
    ],
)]
class ChatConversation implements ResourceInterface
{
    private ?int $id = null;

    private ?CustomerInterface $customer = null;

    private ?string $sessionId = null;

    private ?ChannelInterface $channel = null;

    private ?string $messagesData = null;

    private ?\DateTimeImmutable $createdAt = null;

    private ?\DateTimeImmutable $updatedAt = null;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->updatedAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCustomer(): ?CustomerInterface
    {
        return $this->customer;
    }

    public function setCustomer(?CustomerInterface $customer): self
    {
        $this->customer = $customer;

        return $this;
    }

    public function getSessionId(): ?string
    {
        return $this->sessionId;
    }

    public function setSessionId(?string $sessionId): self
    {
        $this->sessionId = $sessionId;

        return $this;
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

    /**
     * Get messages as MessageBag object.
     */
    public function getMessages(): MessageBag
    {
        if ($this->messagesData === null) {
            return new MessageBag();
        }

        // Deserialize from PHP serialized string with strict whitelist
        // Only allow classes that are actually used in our e-commerce chat application
        $unserialized = unserialize($this->messagesData, [
            'allowed_classes' => [
                // Core MessageBag container
                MessageBag::class,

                // Message types (4 types used in chat)
                SystemMessage::class,
                UserMessage::class,
                AssistantMessage::class,
                ToolCallMessage::class,

                // Message role enum
                Role::class,

                // Content types (text only - no images/audio in our app)
                Text::class,

                // Tool calls (for search_products, add_to_cart, etc.)
                ToolCall::class,
                ToolCallResult::class,

                // Metadata support
                Metadata::class,

                // UUID for message IDs
                UuidV7::class,
            ],
        ]);

        if (!$unserialized instanceof MessageBag) {
            return new MessageBag();
        }

        return $unserialized;
    }

    /**
     * Set messages from MessageBag object.
     */
    public function setMessages(MessageBag $messages): self
    {
        // Serialize MessageBag using PHP serialize (like SessionStore does)
        $this->messagesData = serialize($messages);
        $this->updatedAt = new \DateTimeImmutable();

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeImmutable $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * Get count of messages in conversation.
     */
    public function getMessagesCount(): int
    {
        return count($this->getMessages()->getMessages());
    }

    /**
     * Get customer email or "Anonymous" for grid display.
     */
    public function getCustomerEmail(): string
    {
        if ($this->customer instanceof CustomerInterface) {
            return $this->customer->getEmail() ?? 'N/A';
        }

        return 'Anonymous';
    }

    /**
     * Get channel name for grid display.
     */
    public function getChannelName(): string
    {
        if ($this->channel instanceof ChannelInterface) {
            return $this->channel->getName() ?? 'N/A';
        }

        return 'N/A';
    }
}
