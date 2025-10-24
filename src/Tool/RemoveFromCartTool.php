<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Tool;

use Doctrine\Persistence\ObjectManager;
use Guiziweb\SyliusAIPlatformBundle\Tool\ToolInterface;
use Psr\Log\LoggerInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\OrderItemInterface;
use Sylius\Component\Core\Model\ProductInterface;
use Sylius\Component\Core\Model\ProductVariantInterface;
use Sylius\Component\Core\Repository\ProductVariantRepositoryInterface;
use Sylius\Component\Order\Context\CartContextInterface;
use Sylius\Component\Order\Context\CartNotFoundException;
use Sylius\Component\Order\Modifier\OrderModifierInterface;
use Sylius\Component\Order\Processor\OrderProcessorInterface;
use Symfony\AI\Agent\Toolbox\Attribute\AsTool;

#[AsTool(
    name: 'remove_from_cart',
    description: 'Remove a specific product variant from the shopping cart. Use this when the user wants to delete/remove an item from their cart. IMPORTANT: Use view_cart first to get the exact variant_code, then pass that variant_code to this tool. Example: "Cosmic_Drift_T_Shirt-variant-0".',
)]
final readonly class RemoveFromCartTool implements ToolInterface
{
    /**
     * @param ProductVariantRepositoryInterface<ProductVariantInterface> $productVariantRepository
     */
    public function __construct(
        private ProductVariantRepositoryInterface $productVariantRepository,
        private CartContextInterface $cartContext,
        private OrderModifierInterface $orderModifier,
        private OrderProcessorInterface $orderProcessor,
        private ObjectManager $orderManager,
        private LoggerInterface $aiLogger,
    ) {
    }

    /**
     * @param string $productVariantCode The exact product variant code from view_cart (e.g., "Cosmic_Drift_T_Shirt-variant-0")
     *
     * @return string Confirmation message
     */
    public function __invoke(string $productVariantCode): string
    {
        $this->aiLogger->debug('Remove from cart tool called', ['productVariantCode' => $productVariantCode]);

        // Get cart
        try {
            $cart = $this->cartContext->getCart();
            /** @var OrderInterface $cart */
        } catch (CartNotFoundException $e) {
            $this->aiLogger->error('Cart not found', ['exception' => $e->getMessage()]);

            throw new \RuntimeException('Unable to access cart. Please try again.', 0, $e);
        }

        // Find the variant directly
        /** @var ProductVariantInterface|null $variant */
        $variant = $this->productVariantRepository->findOneBy(['code' => $productVariantCode]);

        if (!$variant) {
            throw new \InvalidArgumentException('Product variant not found.');
        }

        $product = $variant->getProduct();
        /** @var ProductInterface|null $product */

        if (!$product) {
            throw new \InvalidArgumentException('Product not found.');
        }

        // Find the order item with this variant
        $orderItem = null;
        foreach ($cart->getItems() as $item) {
            /** @var OrderItemInterface $item */
            if ($item->getVariant() === $variant) {
                $orderItem = $item;

                break;
            }
        }

        if (!$orderItem) {
            throw new \InvalidArgumentException('This product variant is not in your cart.');
        }

        // Remove from cart
        $this->orderModifier->removeFromOrder($cart, $orderItem);

        // Process and save
        $this->orderProcessor->process($cart);
        $this->orderManager->persist($cart);
        $this->orderManager->flush();

        $productName = $product->getName();
        $this->aiLogger->debug('Product removed from cart', ['product' => $productName, 'variant' => $productVariantCode]);

        return "Removed '{$variant->getName()}' from your cart.";
    }
}
