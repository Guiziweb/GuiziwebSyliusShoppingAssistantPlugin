<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Twig\Component\ChatWidgetConfiguration;

use Guiziweb\SyliusShoppingAssistantPlugin\Entity\ChatWidgetConfiguration;
use Guiziweb\SyliusShoppingAssistantPlugin\Form\Type\ChatWidgetConfigurationType;
use Guiziweb\SyliusShoppingAssistantPlugin\Repository\ChatWidgetConfigurationRepository;
use Sylius\Bundle\UiBundle\Twig\Component\ResourceFormComponentTrait;
use Sylius\Bundle\UiBundle\Twig\Component\TemplatePropTrait;
use Symfony\Component\DependencyInjection\Attribute\AutoconfigureTag;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\PreReRender;

/**
 * @use ResourceFormComponentTrait<ChatWidgetConfiguration>
 */
#[AsLiveComponent(name: 'guiziweb:chat_widget_configuration:form', template: '@GuiziwebSyliusShoppingAssistantPlugin/components/ChatWidgetConfiguration/Form.html.twig', route: 'sylius_admin_live_component')]
#[AutoconfigureTag('sylius.live_component.admin', ['key' => 'guiziweb:chat_widget_configuration:form'])]
final class FormComponent
{
    /** @use ResourceFormComponentTrait<ChatWidgetConfiguration> */
    use ResourceFormComponentTrait;

    use TemplatePropTrait;

    public function __construct(
        #[Autowire(service: ChatWidgetConfigurationRepository::class)]
        ChatWidgetConfigurationRepository $chatWidgetConfigurationRepository,
        FormFactoryInterface $formFactory,
    ) {
        $this->initialize(
            $chatWidgetConfigurationRepository,
            $formFactory,
            ChatWidgetConfiguration::class,
            ChatWidgetConfigurationType::class,
        );
    }

    #[PreReRender(priority: -100)]
    public function updateForm(): void
    {
        $this->form = null;
    }
}
