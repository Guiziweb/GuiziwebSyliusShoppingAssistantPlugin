<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

final class Configuration implements ConfigurationInterface
{
    /**
     * @psalm-suppress UnusedVariable
     */
    public function getConfigTreeBuilder(): TreeBuilder
    {
        $treeBuilder = new TreeBuilder('guiziweb_sylius_shopping_assistant');
        $rootNode = $treeBuilder->getRootNode();

        return $treeBuilder;
    }
}
