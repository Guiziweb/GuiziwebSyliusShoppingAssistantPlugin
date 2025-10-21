<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\EventListener;

use Doctrine\ORM\EntityManagerInterface;
use Guiziweb\SyliusShoppingAssistantPlugin\Context\ChatConversationContextInterface;
use Guiziweb\SyliusShoppingAssistantPlugin\Entity\ChatConversation;
use Guiziweb\SyliusShoppingAssistantPlugin\Exception\ChatConversationNotFoundException;
use Sylius\Bundle\CoreBundle\SectionResolver\SectionProviderInterface;
use Sylius\Bundle\ShopBundle\SectionResolver\ShopSection;
use Sylius\Bundle\UserBundle\Event\UserEvent;
use Sylius\Component\Core\Model\ShopUserInterface;
use Sylius\Component\Customer\Model\CustomerInterface;
use Symfony\Component\EventDispatcher\Attribute\AsEventListener;
use Symfony\Component\Security\Http\Event\InteractiveLoginEvent;

#[AsEventListener(event: 'security.interactive_login', method: 'onInteractiveLogin')]
#[AsEventListener(event: 'sylius.user.security.implicit_login', method: 'onImplicitLogin')]
final class ChatConversationBlamerListener
{
    public function __construct(
        private ChatConversationContextInterface $conversationContext,
        private SectionProviderInterface $sectionProvider,
        private EntityManagerInterface $entityManager,
    ) {
    }

    public function onImplicitLogin(UserEvent $userEvent): void
    {
        if (!$this->sectionProvider->getSection() instanceof ShopSection) {
            return;
        }

        $user = $userEvent->getUser();

        if (!$user instanceof ShopUserInterface) {
            return;
        }

        $this->blame($user);
    }

    public function onInteractiveLogin(InteractiveLoginEvent $interactiveLoginEvent): void
    {
        $section = $this->sectionProvider->getSection();

        if (!$section instanceof ShopSection) {
            return;
        }

        $user = $interactiveLoginEvent->getAuthenticationToken()->getUser();

        if (!$user instanceof ShopUserInterface) {
            return;
        }

        $this->blame($user);
    }

    private function blame(ShopUserInterface $user): void
    {
        $customer = $user->getCustomer();

        if (!$customer instanceof CustomerInterface) {
            return;
        }

        $conversation = $this->getConversation();

        // No conversation in session (first visit after login)
        if ($conversation === null) {
            return;
        }

        // Conversation already has a customer (already blamed or customer's conversation)
        if ($conversation->getCustomer() instanceof CustomerInterface) {
            return;
        }

        // Migrate anonymous conversation to customer
        $conversation->setCustomer($customer);
        $conversation->setSessionId(null);
        $this->entityManager->flush();
    }

    private function getConversation(): ?ChatConversation
    {
        try {
            $conversation = $this->conversationContext->getConversation();
        } catch (ChatConversationNotFoundException) {
            return null;
        }

        if (!$conversation instanceof ChatConversation) {
            return null;
        }

        return $conversation;
    }
}
