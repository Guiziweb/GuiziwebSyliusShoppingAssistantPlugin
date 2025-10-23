<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Tool;

use Guiziweb\SyliusAIPlatformBundle\Tool\ToolInterface;
use Psr\Log\LoggerInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\OrderItemInterface;
use Sylius\Component\Core\Model\ProductInterface;
use Sylius\Component\Core\Model\ProductVariantInterface;
use Sylius\Bundle\MoneyBundle\Formatter\MoneyFormatterInterface;
use Sylius\Component\Order\Context\CartContextInterface;
use Sylius\Component\Order\Context\CartNotFoundException;
use Symfony\AI\Agent\Toolbox\Attribute\AsTool;

#[AsTool(
    name: 'view_cart',
    description: 'View the current shopping cart contents. Returns all items with their product codes, variant codes, options (size, color, etc.), quantities, and prices. Use this to see what is actually in the cart before removing items.',
)]
final readonly class ViewCartTool implements ToolInterface
{
    public function __construct(
        private CartContextInterface $cartContext,
        private MoneyFormatterInterface
        $moneyFormatter,
        private LoggerInterface $aiLogger,
    ) {
    }

    /**
     * @return string|array{items: array<array{product_name: string, product_code: string, variant_code: string, options: array<string, string>, quantity: int, unit_price: string, total: string}>, cart_total: string, item_count: int} Cart contents or empty message
     */
    public function __invoke(): string|array
    {
        $this->aiLogger->debug('View cart tool called');

        // Get cart
        try {
            $cart = $this->cartContext->getCart();
            /** @var OrderInterface $cart */
        } catch (CartNotFoundException $e) {
            $this->aiLogger->error('Cart not found', ['exception' => $e->getMessage()]);

            return 'Unable to access cart. Please try again.';
        }

        // Check if cart is empty
        if ($cart->getItems()->isEmpty()) {
            return 'Your cart is empty.';
        }

        $channel = $cart->getChannel();
        $baseCurrency = $channel?->getBaseCurrency();
        $currencyCode = $baseCurrency?->getCode();

        if (!$currencyCode) {
            return 'Unable to determine cart currency.';
        }

        $items = [];
        foreach ($cart->getItems() as $item) {
            /** @var OrderItemInterface $item */
            $variant = $item->getVariant();
            /** @var ProductVariantInterface|null $variant */

            if (!$variant) {
                continue;
            }

            $product = $variant->getProduct();
            /** @var ProductInterface|null $product */

            if (!$product) {
                continue;
            }

            $productName = $product->getName();
            $productCode = $product->getCode();
            $variantCode = $variant->getCode();

            if (!is_string($productName) || !is_string($productCode) || !is_string($variantCode)) {
                continue;
            }

            // Get variant options (size, color, etc.)
            $options = [];
            foreach ($variant->getOptionValues() as $optionValue) {
                $optionName = $optionValue->getOption()?->getName();
                $optionVal = $optionValue->getValue();
                if (is_string($optionName) && is_string($optionVal)) {
                    $options[$optionName] = $optionVal;
                }
            }

            $quantity = $item->getQuantity();
            $unitPrice = $item->getUnitPrice();
            $total = $item->getTotal();

            $items[] = [
                'product_name' => $productName,
                'product_code' => $productCode,
                'variant_code' => $variantCode,
                'options' => $options,
                'quantity' => $quantity,
                'unit_price' => $this->moneyFormatter->format($unitPrice, $currencyCode),
                'total' => $this->moneyFormatter->format($total, $currencyCode),
            ];
        }

        $cartTotal = $cart->getTotal();

        $this->aiLogger->debug('Cart contents retrieved', [
            'item_count' => count($items),
            'total' => $cartTotal,
        ]);

        return [
            'items' => $items,
            'cart_total' => $this->moneyFormatter->format($cartTotal, $currencyCode),
            'item_count' => count($items),
        ];
    }
}
