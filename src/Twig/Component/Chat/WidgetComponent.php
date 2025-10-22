<?php

declare(strict_types=1);

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Guiziweb\SyliusShoppingAssistantPlugin\Twig\Component\Chat;

use Guiziweb\SyliusShoppingAssistantPlugin\Context\ChatConversationContextInterface;
use Guiziweb\SyliusShoppingAssistantPlugin\Exception\ChatConversationNotFoundException;
use Guiziweb\SyliusShoppingAssistantPlugin\Form\Type\ChatMessageType;
use Guiziweb\SyliusShoppingAssistantPlugin\Provider\ChatWidgetConfigurationProvider;
use Sylius\Component\Channel\Context\ChannelContextInterface;
use Sylius\Component\Core\Model\ChannelInterface;
use Sylius\Component\Core\Model\ProductInterface;
use Sylius\Component\Core\Repository\ProductRepositoryInterface;
use Sylius\Component\Locale\Context\LocaleContextInterface;
use Sylius\TwigHooks\LiveComponent\HookableLiveComponentTrait;
use Symfony\AI\Platform\Message\Content\Text;
use Symfony\Component\DependencyInjection\Attribute\AutoconfigureTag;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\Form\FormView;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent(name: 'guiziweb:chat:widget', template: '@GuiziwebSyliusShoppingAssistantPlugin/components/Chat/Widget.html.twig', route: 'sylius_shop_live_component')]
#[AutoconfigureTag('sylius.live_component.shop', ['key' => 'guiziweb:chat:widget'])]
final class WidgetComponent
{
    use DefaultActionTrait;
    use HookableLiveComponentTrait;

    /**
     * @param ProductRepositoryInterface<ProductInterface> $productRepository
     */
    public function __construct(
        private readonly ChatWidgetConfigurationProvider $chatWidgetConfigurationProvider,
        private readonly ChatConversationContextInterface $conversationContext,
        private readonly ProductRepositoryInterface $productRepository,
        private readonly ChannelContextInterface $channelContext,
        private readonly LocaleContextInterface $localeContext,
        private readonly FormFactoryInterface $formFactory,
    ) {
    }

    public function getForm(): FormView
    {
        return $this->formFactory->create(ChatMessageType::class)->createView();
    }

    public function shouldDisplay(): bool
    {
        return null !== $this->chatWidgetConfigurationProvider->getConfiguration();
    }

    public function getMessages(): array
    {
        try {
            $conversation = $this->conversationContext->getConversation();
        } catch (ChatConversationNotFoundException) {
            // No conversation yet, return empty
            return [];
        }

        $messageBag = $conversation->getMessages();
        $messages = [];

        foreach ($messageBag->getMessages() as $message) {
            if (\Symfony\AI\Platform\Message\Role::ToolCall === $message->getRole()) {
                continue;
            }

            $content = $message->getContent();

            // Handle array content (structured messages with Text objects)
            if (\is_array($content)) {
                $textContent = '';
                foreach ($content as $part) {
                    if ($part instanceof Text) {
                        $textContent .= $part->getText();
                    }
                }
                $content = $textContent;
            }

            $messageData = [
                'role' => $message->getRole()->value,
                'content' => $content ?? '',
            ];

            // Add metadata from assistant messages
            if (\Symfony\AI\Platform\Message\Role::Assistant === $message->getRole()) {
                $productSlugs = $message->getMetadata()->get('products', []);
                /** @var array<string> $productSlugs */
                if (!empty($productSlugs)) {
                    // Load products from slugs using channel and locale
                    /** @var ChannelInterface $channel */
                    $channel = $this->channelContext->getChannel();
                    $locale = $this->localeContext->getLocaleCode();

                    $products = [];
                    foreach ($productSlugs as $slug) {
                        $product = $this->productRepository->findOneByChannelAndSlug($channel, $locale, $slug);
                        if ($product) {
                            $products[] = $product;
                        }
                    }
                    $messageData['products'] = $products;
                }

                $redirectUrl = $message->getMetadata()->get('redirect_url');
                if ($redirectUrl) {
                    $messageData['redirect_url'] = $redirectUrl;
                }
            }

            $messages[] = $messageData;
        }

        return $messages;
    }

    public function getWelcomeMessage(): string
    {
        $config = $this->chatWidgetConfigurationProvider->getConfiguration();
        \assert(null !== $config);

        return $config->getWelcomeMessage();
    }
}
