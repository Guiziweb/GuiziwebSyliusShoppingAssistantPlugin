<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin;

use Guiziweb\SyliusShoppingAssistantPlugin\DependencyInjection\Compiler\RegisterChatConversationContextsPass;
use Sylius\Bundle\CoreBundle\Application\SyliusPluginTrait;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;

final class GuiziwebSyliusShoppingAssistantPlugin extends Bundle
{
    use SyliusPluginTrait;

    public function build(ContainerBuilder $container): void
    {
        parent::build($container);

        $container->addCompilerPass(new RegisterChatConversationContextsPass());
    }

    public function getPath(): string
    {
        return \dirname(__DIR__);
    }
}
