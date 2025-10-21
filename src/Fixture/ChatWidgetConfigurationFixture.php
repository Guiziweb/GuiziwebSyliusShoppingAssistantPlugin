<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Fixture;

use Doctrine\ORM\EntityManagerInterface;
use Guiziweb\SyliusShoppingAssistantPlugin\Fixture\Factory\ChatWidgetConfigurationExampleFactory;
use Sylius\Bundle\CoreBundle\Fixture\AbstractResourceFixture;
use Symfony\Component\Config\Definition\Builder\ArrayNodeDefinition;
use Symfony\Component\DependencyInjection\Attribute\AutoconfigureTag;

#[AutoconfigureTag('sylius_fixtures.fixture')]
final class ChatWidgetConfigurationFixture extends AbstractResourceFixture
{
    public function __construct(
        EntityManagerInterface $entityManager,
        ChatWidgetConfigurationExampleFactory $exampleFactory,
    ) {
        parent::__construct($entityManager, $exampleFactory);
    }

    public function getName(): string
    {
        return 'chat_widget_configuration';
    }

    protected function configureResourceNode(ArrayNodeDefinition $resourceNode): void
    {
        $resourceNode
            ->children()
                ->scalarNode('channel')->cannotBeEmpty()->end()
                ->scalarNode('agent')->cannotBeEmpty()->end()
                ->booleanNode('enabled')->end()
                ->scalarNode('locale')->end()
                ->scalarNode('welcome_message')->cannotBeEmpty()->end()
        ;
    }
}