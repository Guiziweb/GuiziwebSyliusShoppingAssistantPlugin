<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Tool;

use Guiziweb\SyliusAIPlatformBundle\Tool\ToolInterface;
use Psr\Log\LoggerInterface;
use Sylius\Bundle\CoreBundle\Doctrine\ORM\ProductRepository;
use Sylius\Component\Core\Model\ProductInterface;
use Sylius\Component\Core\Repository\ProductRepositoryInterface;
use Symfony\AI\Agent\Toolbox\Attribute\AsTool;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

#[AsTool(
    name: 'redirect',
    description: 'Redirect the user to a specific page. Available routes: "cart" (shopping cart), "checkout" (checkout page), "account" (user account), "products" (product listing), "product" (specific product page - requires productSlug parameter).',
)]
final readonly class RedirectTool implements ToolInterface
{
    /**
     * @param ProductRepositoryInterface<ProductInterface> $productRepository
     */
    public function __construct(
        private UrlGeneratorInterface $urlGenerator,
        private ProductRepositoryInterface $productRepository,
        private LoggerInterface $aiLogger,
    ) {
    }

    /**
     * @param string $route       The route name to redirect to (e.g., 'cart', 'checkout', 'account', 'products', 'product')
     * @param string $productSlug The product slug (required when route is 'product', use empty string otherwise)
     *
     * @return string The redirect URL
     */
    public function __invoke(string $route, string $productSlug = ''): string
    {
        $this->aiLogger->debug('Redirect tool called', [
            'route' => $route,
            'productSlug' => $productSlug,
        ]);

        $url = match ($route) {
            'cart' => $this->urlGenerator->generate('sylius_shop_cart_summary'),
            'checkout' => $this->urlGenerator->generate('sylius_shop_checkout_start'),
            'account' => $this->urlGenerator->generate('sylius_shop_account_dashboard'),
            'products' => $this->urlGenerator->generate('sylius_shop_product_index'),
            'product' => $this->generateProductUrl($productSlug),
            default => throw new \InvalidArgumentException("Unknown route: {$route}. Available: cart, checkout, account, products, product"),
        };

        $this->aiLogger->debug('Redirect URL generated', ['url' => $url]);

        return $url;
    }

    private function generateProductUrl(string $productSlug): string
    {
        if ('' === $productSlug) {
            throw new \InvalidArgumentException('Product slug is required when using route "product"');
        }

        // Verify product exists before generating URL
        // Slug is in ProductTranslation, not Product directly
        /** @var ProductRepository<ProductInterface> $productRepository */
        $productRepository = $this->productRepository;

        /** @var ProductInterface|null $product */
        $product = $productRepository->createQueryBuilder('p')
            ->join('p.translations', 't')
            ->where('t.slug = :slug')
            ->setParameter('slug', $productSlug)
            ->getQuery()
            ->getOneOrNullResult();

        if (!$product) {
            throw new \InvalidArgumentException('Product not found.');
        }

        if (!$product->isEnabled()) {
            throw new \InvalidArgumentException('Product not available.');
        }

        return $this->urlGenerator->generate('sylius_shop_product_show', ['slug' => $productSlug]);
    }
}
