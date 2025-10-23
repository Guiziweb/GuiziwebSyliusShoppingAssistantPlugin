<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Tool;

use Doctrine\Persistence\ObjectManager;
use Psr\Log\LoggerInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\OrderItemInterface;
use Sylius\Component\Core\Model\ProductInterface;
use Sylius\Component\Core\Model\ProductVariantInterface;
use Sylius\Component\Core\Repository\ProductRepositoryInterface;
use Sylius\Component\Core\Repository\ProductVariantRepositoryInterface;
use Sylius\Component\Order\Context\CartContextInterface;
use Sylius\Component\Order\Context\CartNotFoundException;
use Sylius\Component\Order\Modifier\OrderItemQuantityModifierInterface;
use Sylius\Component\Order\Modifier\OrderModifierInterface;
use Sylius\Component\Order\Processor\OrderProcessorInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;
use Symfony\AI\Agent\Toolbox\Attribute\AsTool;

#[AsTool(
    name: 'add_to_cart',
    description: 'Add a product to the shopping cart. IMPORTANT: You MUST use the exact "code" value returned by search_products tool. Do NOT invent or modify the product code. Example: if search_products returns code="Coastal_Bliss_Jeans", use that EXACT string.',
)]
final readonly class AddToCartTool
{
    /**
     * @param ProductRepositoryInterface<ProductInterface> $productRepository
     * @param ProductVariantRepositoryInterface<ProductVariantInterface> $productVariantRepository
     */
    public function __construct(
        private ProductRepositoryInterface $productRepository,
        private ProductVariantRepositoryInterface $productVariantRepository,
        private CartContextInterface $cartContext,
        private FactoryInterface $orderItemFactory,
        private OrderModifierInterface $orderModifier,
        private OrderItemQuantityModifierInterface $orderItemQuantityModifier,
        private OrderProcessorInterface $orderProcessor,
        private ObjectManager $orderManager,
        private LoggerInterface $aiLogger,
    ) {
    }

    /**
     * @param string $productCode        The EXACT product code from search_products result (e.g., "Coastal_Bliss_Jeans")
     * @param string $productVariantCode Optional variant code from get_product_info (e.g., "Comet_Pulse_T_Shirt-variant-1"). If not provided, the first available variant will be used.
     * @param int    $quantity           The quantity to add (default: 1)
     *
     * @return string Confirmation message
     */
    public function __invoke(string $productCode, string $productVariantCode = '', int $quantity = 1): string
    {
        $this->aiLogger->debug('Add to cart tool called', [
            'productCode' => $productCode,
            'productVariantCode' => $productVariantCode,
            'quantity' => $quantity,
        ]);

        // If variant code is provided, use it directly
        if ($productVariantCode !== '') {
            /** @var ProductVariantInterface|null $variant */
            $variant = $this->productVariantRepository->findOneBy(['code' => $productVariantCode]);

            if (!$variant) {
                $this->aiLogger->error('Variant not found', ['productVariantCode' => $productVariantCode]);

                throw new \InvalidArgumentException('Product variant not found.');
            }

            if (!$variant->isEnabled()) {
                throw new \InvalidArgumentException('Product variant not available.');
            }

            /** @var ProductInterface $product */
            $product = $variant->getProduct();

            $this->aiLogger->debug('Variant found', [
                'product' => $product->getName(),
                'variant' => $productVariantCode,
            ]);
        } else {
            // Fallback: Find the product and use first available variant
            /** @var ProductInterface|null $product */
            $product = $this->productRepository->findOneBy(['code' => $productCode]);

            if (!$product) {
                $this->aiLogger->error('Product not found', ['productCode' => $productCode]);

                throw new \InvalidArgumentException('Product not found.');
            }

            $this->aiLogger->debug('Product found', ['product' => $product->getName()]);

            if (!$product->isEnabled()) {
                throw new \InvalidArgumentException('Product not available.');
            }

            // Get the first available variant
            /** @var ProductVariantInterface|false $variant */
            $variant = $product->getVariants()->first();
            if (!$variant) {
                throw new \InvalidArgumentException('Product not available.');
            }
        }

        // Get or create the current cart using CartContext
        try {
            $cart = $this->cartContext->getCart();
            /** @var OrderInterface $cart */
            $channel = $cart->getChannel();
            $this->aiLogger->debug('Cart retrieved', [
                'cartId' => $cart->getId(),
                'itemCount' => $cart->getItems()->count(),
                'channel' => $channel ? $channel->getCode() : null,
            ]);
        } catch (CartNotFoundException $e) {
            $this->aiLogger->error('Cart not found', ['exception' => $e->getMessage()]);

            throw new \RuntimeException('Unable to access cart. Please try again.', 0, $e);
        }

        // Create order item
        /** @var OrderItemInterface $orderItem */
        $orderItem = $this->orderItemFactory->createNew();
        $orderItem->setVariant($variant);

        // Set quantity
        $this->orderItemQuantityModifier->modify($orderItem, $quantity);

        // Add to cart
        $this->orderModifier->addToOrder($cart, $orderItem);

        // Process the order to recalculate totals, taxes, etc.
        $this->orderProcessor->process($cart);

        // Persist changes to database (persist needed for new carts)
        $this->orderManager->persist($cart);
        $this->orderManager->flush();

        $this->aiLogger->debug('Cart persisted', [
            'cartId' => $cart->getId(),
            'itemCount' => $cart->getItems()->count(),
            'channel' => $cart->getChannel() ? $cart->getChannel()->getCode() : null,
        ]);

        return "Added {$quantity}x '{$product->getName()}' to your cart successfully! ";
    }
}
