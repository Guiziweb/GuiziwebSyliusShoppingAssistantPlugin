<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Context;

use Guiziweb\SyliusShoppingAssistantPlugin\Attribute\AsChatConversationContext;
use Guiziweb\SyliusShoppingAssistantPlugin\Entity\ChatConversation;
use Guiziweb\SyliusShoppingAssistantPlugin\Exception\ChatConversationNotFoundException;
use Guiziweb\SyliusShoppingAssistantPlugin\Repository\ChatConversationRepository;
use Sylius\Component\Channel\Context\ChannelContextInterface;
use Sylius\Component\Channel\Context\ChannelNotFoundException;
use Sylius\Component\Core\Model\ChannelInterface;
use Sylius\Component\Customer\Context\CustomerContextInterface;
use Sylius\Component\Customer\Model\CustomerInterface;

#[AsChatConversationContext(priority: 100)]
final class CustomerBasedChatConversationContext implements ChatConversationContextInterface
{
    public function __construct(
        private ChatConversationRepository $conversationRepository,
        private ChannelContextInterface $channelContext,
        private CustomerContextInterface $customerContext,
    ) {
    }

    public function getConversation(): ChatConversation
    {
        $customer = $this->customerContext->getCustomer();

        if (!$customer instanceof CustomerInterface) {
            throw new ChatConversationNotFoundException('Customer not found in context');
        }

        try {
            $channel = $this->channelContext->getChannel();
        } catch (ChannelNotFoundException $exception) {
            throw new ChatConversationNotFoundException('Channel not found in context', $exception);
        }

        if (!$channel instanceof ChannelInterface) {
            throw new ChatConversationNotFoundException('Invalid channel type');
        }

        $conversation = $this->conversationRepository->findOneByCustomerAndChannel($customer, $channel);

        if (!$conversation instanceof ChatConversation) {
            throw new ChatConversationNotFoundException('No conversation found for this customer and channel');
        }

        return $conversation;
    }
}
