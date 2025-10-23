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
use Sylius\Component\Core\Repository\ProductRepositoryInterface;
use Sylius\Component\Order\Context\CartContextInterface;
use Sylius\Component\Order\Context\CartNotFoundException;
use Sylius\Component\Order\Modifier\OrderModifierInterface;
use Sylius\Component\Order\Processor\OrderProcessorInterface;
use Symfony\AI\Agent\Toolbox\Attribute\AsTool;

#[AsTool(
    name: 'remove_from_cart',
    description: 'Remove a product completely from the shopping cart. Use this when the user wants to delete/remove an item from their cart. You need the exact product code.',
)]
final readonly class RemoveFromCartTool implements ToolInterface
{
    /**
     * @param ProductRepositoryInterface<ProductInterface> $productRepository
     */
    public function __construct(
        private ProductRepositoryInterface $productRepository,
        private CartContextInterface $cartContext,
        private OrderModifierInterface $orderModifier,
        private OrderProcessorInterface $orderProcessor,
        private ObjectManager $orderManager,
        private LoggerInterface $aiLogger,
    ) {
    }

    /**
     * @param string $productCode The product code to remove from cart
     *
     * @return string Confirmation message
     */
    public function __invoke(string $productCode): string
    {
        $this->aiLogger->debug('Remove from cart tool called', ['productCode' => $productCode]);

        // Get cart
        try {
            $cart = $this->cartContext->getCart();
            /** @var OrderInterface $cart */
        } catch (CartNotFoundException $e) {
            $this->aiLogger->error('Cart not found', ['exception' => $e->getMessage()]);

            throw new \RuntimeException('Unable to access cart. Please try again.', 0, $e);
        }

        // Find the product
        /** @var ProductInterface|null $product */
        $product = $this->productRepository->findOneBy(['code' => $productCode]);
        if (!$product) {
            return 'Product not found.';
        }

        $variant = $product->getVariants()->first();
        /** @var ProductVariantInterface|false $variant */
        if (!$variant) {
            return 'Product not available.';
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
            return 'Product not in cart.';
        }

        // Remove from cart
        $this->orderModifier->removeFromOrder($cart, $orderItem);

        // Process and save
        $this->orderProcessor->process($cart);
        $this->orderManager->persist($cart);
        $this->orderManager->flush();

        $this->aiLogger->debug('Product removed from cart', ['product' => $product->getName()]);

        return "Removed '{$product->getName()}' from your cart.";
    }
}
