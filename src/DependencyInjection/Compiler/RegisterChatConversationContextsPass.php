<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\DependencyInjection\Compiler;

use Guiziweb\SyliusShoppingAssistantPlugin\Attribute\AsChatConversationContext;
use Guiziweb\SyliusShoppingAssistantPlugin\Context\ChatConversationContextInterface;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Reference;

final class RegisterChatConversationContextsPass implements CompilerPassInterface
{
    public function process(ContainerBuilder $container): void
    {
        if (!$container->has('guiziweb.context.chat_conversation.composite')) {
            return;
        }

        $composite = $container->findDefinition('guiziweb.context.chat_conversation.composite');
        $taggedServices = $container->findTaggedServiceIds(AsChatConversationContext::SERVICE_TAG);

        $contexts = [];

        foreach ($taggedServices as $id => $tags) {
            foreach ($tags as $attributes) {
                $priority = $attributes['priority'] ?? 0;
                $contexts[$priority][] = new Reference($id);
            }
        }

        krsort($contexts);

        foreach ($contexts as $priority => $contextReferences) {
            foreach ($contextReferences as $contextReference) {
                $composite->addMethodCall('addContext', [$contextReference, $priority]);
            }
        }

        $container->setAlias(
            ChatConversationContextInterface::class,
            'guiziweb.context.chat_conversation.composite',
        );
    }
}
