<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Menu;

use Sylius\Bundle\UiBundle\Menu\Event\MenuBuilderEvent;
use Symfony\Component\EventDispatcher\Attribute\AsEventListener;

#[AsEventListener(event: 'sylius.menu.admin.main', method: 'addMenuItems')]
final class AdminMenuListener
{
    public function addMenuItems(MenuBuilderEvent $event): void
    {
        $menu = $event->getMenu();

        $aiMenu = $menu->getChild('ai');

        if (null === $aiMenu) {
            throw new \RuntimeException('AI menu not found. Make sure GuiziwebSyliusAIPlatformBundle is installed and enabled.');
        }

        $aiMenu
            ->addChild('chat_conversations', [
                'route' => 'guiziweb_admin_chat_conversation_index',
            ])
            ->setLabel('guiziweb.ui.chat_conversations')
            ->setLabelAttribute('icon', 'tabler:messages');

        $aiMenu
            ->addChild('chat_widget', [
                'route' => 'guiziweb_admin_chat_widget_configuration_index',
            ])
            ->setLabel('guiziweb.ui.chat_widget')
            ->setLabelAttribute('icon', 'tabler:message-chatbot');
    }
}
