<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Tool;

use Sylius\Bundle\CoreBundle\Doctrine\ORM\ProductRepository;
use Sylius\Component\Channel\Context\ChannelContextInterface;
use Sylius\Component\Core\Model\ProductInterface;
use Sylius\Component\Core\Repository\ProductRepositoryInterface;
use Sylius\Component\Locale\Context\LocaleContextInterface;
use Symfony\AI\Agent\Toolbox\Attribute\AsTool;

#[AsTool(
    name: 'search_products',
    description: 'Search for products in the catalog by name or description. Returns a list of product slugs.',
)]
final class SearchProductsTool
{
    /**
     * @param ProductRepositoryInterface<ProductInterface> $productRepository
     */
    public function __construct(
        private readonly ProductRepositoryInterface $productRepository,
        private readonly LocaleContextInterface $localeContext,
        private readonly ChannelContextInterface $channelContext,
    ) {
    }

    /**
     * @param string $query The search query to find products
     * @param int    $limit Maximum number of results to return (default: 5)
     *
     * @return array<array{code: string, slug: string, name: string, description: ?string}> Array of products with code, slug, name and description
     */
    public function __invoke(string $query, int $limit = 5): array
    {
        $locale = $this->localeContext->getLocaleCode();
        $channel = $this->channelContext->getChannel();

        /** @var ProductRepository<ProductInterface> $productRepository */
        $productRepository = $this->productRepository;

        // Search products by name/description, filtered by channel and enabled status
        /** @var array<ProductInterface> $products */
        $products = $productRepository->createQueryBuilder('p')
            ->addSelect('translation')
            ->innerJoin('p.translations', 'translation', 'WITH', 'translation.locale = :locale')
            ->andWhere('translation.name LIKE :query OR translation.description LIKE :query')
            ->andWhere(':channel MEMBER OF p.channels')
            ->andWhere('p.enabled = :enabled')
            ->setParameter('locale', $locale)
            ->setParameter('query', '%' . $query . '%')
            ->setParameter('channel', $channel)
            ->setParameter('enabled', true)
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();

        // Return slug, name and description - AI needs these to talk accurately about products
        return array_map(
            function (ProductInterface $product) {
                $code = $product->getCode();
                $slug = $product->getSlug();
                $name = $product->getName();

                if (!\is_string($code) || !\is_string($slug) || !\is_string($name)) {
                    throw new \InvalidArgumentException('Product not available.');
                }

                return [
                    'code' => $code,
                    'slug' => $slug,
                    'name' => $name,
                    'description' => $product->getShortDescription(),
                ];
            },
            $products,
        );
    }
}
