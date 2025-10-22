<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\DependencyInjection;

use Guiziweb\SyliusShoppingAssistantPlugin\Attribute\AsChatConversationContext;
use Sylius\Bundle\CoreBundle\DependencyInjection\PrependDoctrineMigrationsTrait;
use Sylius\Bundle\ResourceBundle\DependencyInjection\Extension\AbstractResourceExtension;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ChildDefinition;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\PrependExtensionInterface;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;

final class GuiziwebSyliusShoppingAssistantExtension extends AbstractResourceExtension implements PrependExtensionInterface
{
    use PrependDoctrineMigrationsTrait;

    public function prepend(ContainerBuilder $container): void
    {
        $this->prependDoctrineMigrations($container);
        $this->prependSyliusResource($container);
        $this->prependRateLimiter($container);
        $this->prependSyliusResourceConfig($container);
        $this->prependMonolog($container);
    }

    private function prependRateLimiter(ContainerBuilder $container): void
    {
        $loader = new YamlFileLoader($container, new FileLocator(__DIR__ . '/../../config/packages'));
        $loader->load('rate_limiter.yaml');
    }

    private function prependSyliusResource(ContainerBuilder $container): void
    {
        $container->prependExtensionConfig('sylius_resource', [
            'mapping' => [
                'paths' => [
                    dirname(__DIR__) . '/Entity',
                ],
            ],
        ]);
    }

    private function prependSyliusResourceConfig(ContainerBuilder $container): void
    {
        $loader = new YamlFileLoader($container, new FileLocator(__DIR__ . '/../../config/packages'));
        $loader->load('_sylius.yaml');
    }

    private function prependMonolog(ContainerBuilder $container): void
    {
        $container->prependExtensionConfig('monolog', [
            'channels' => ['ai'],
            'handlers' => [
                'ai' => [
                    'type' => 'stream',
                    'path' => '%kernel.logs_dir%/ai.log',
                    'level' => 'debug',
                    'channels' => ['ai'],
                ],
            ],
        ]);
    }

    /** @psalm-suppress UnusedVariable */
    public function load(array $configs, ContainerBuilder $container): void
    {
        $loader = new YamlFileLoader($container, new FileLocator(__DIR__ . '/../../config'));
        $loader->load('services.yaml');

        $this->registerAttributeAutoconfiguration($container);
    }

    private function registerAttributeAutoconfiguration(ContainerBuilder $container): void
    {
        $container->registerAttributeForAutoconfiguration(
            AsChatConversationContext::class,
            static function (ChildDefinition $definition, AsChatConversationContext $attribute): void {
                $definition->addTag(AsChatConversationContext::SERVICE_TAG, ['priority' => $attribute->getPriority()]);
            },
        );
    }

    protected function getMigrationsNamespace(): string
    {
        return 'Guiziweb\SyliusShoppingAssistantPlugin\Migrations';
    }

    protected function getMigrationsDirectory(): string
    {
        return '@GuiziwebSyliusShoppingAssistantPlugin/src/Migrations';
    }

    protected function getNamespacesOfMigrationsExecutedBefore(): array
    {
        return [
            'Sylius\Bundle\CoreBundle\Migrations',
            'Guiziweb\SyliusAIPlatformBundle\Migrations',
        ];
    }
}
