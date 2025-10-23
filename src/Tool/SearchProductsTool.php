<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Tool;

use Guiziweb\SyliusAIPlatformBundle\Tool\ToolInterface;
use Sylius\Bundle\CoreBundle\Doctrine\ORM\ProductRepository;
use Sylius\Component\Channel\Context\ChannelContextInterface;
use Sylius\Component\Core\Model\ProductInterface;
use Sylius\Component\Core\Repository\ProductRepositoryInterface;
use Sylius\Component\Locale\Context\LocaleContextInterface;
use Symfony\AI\Agent\Toolbox\Attribute\AsTool;

#[AsTool(
    name: 'search_products',
    description: 'Search for products in the catalog by name or description. Supports price filtering. Returns a list of product slugs. IMPORTANT: If no results found, suggest common spelling variations (with/without hyphens, spaces, etc.) and ASK the user if they want you to search again with those variations. Example: "No results for \'tshirt\'. Would you like me to try \'t-shirt\' or \'t shirt\' instead?"',
)]
final class SearchProductsTool implements ToolInterface
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
     * @param string $query    The search query to find products
     * @param int    $priceMax Maximum price in channel currency (0 = no filter, e.g., 50 for products under 50€/$/etc)
     * @param int    $limit    Maximum number of results to return (default: 5)
     *
     * @return array<array{code: string, slug: string, name: string, description: ?string}> Array of products with code, slug, name and description
     */
    public function __invoke(string $query, int $priceMax = 0, int $limit = 5): array
    {
        $locale = $this->localeContext->getLocaleCode();
        $channel = $this->channelContext->getChannel();

        /** @var ProductRepository<ProductInterface> $productRepository */
        $productRepository = $this->productRepository;

        $qb = $productRepository->createQueryBuilder('p')
            ->addSelect('translation')
            ->addSelect('taxon')
            ->addSelect('taxonTranslation')
            ->innerJoin('p.translations', 'translation', 'WITH', 'translation.locale = :locale')
            ->leftJoin('p.mainTaxon', 'taxon')
            ->leftJoin('taxon.translations', 'taxonTranslation', 'WITH', 'taxonTranslation.locale = :locale')
            ->andWhere('LOWER(translation.name) LIKE LOWER(:query) OR LOWER(translation.description) LIKE LOWER(:query) OR LOWER(taxonTranslation.name) LIKE LOWER(:query)')
            ->andWhere(':channel MEMBER OF p.channels')
            ->andWhere('p.enabled = :enabled')
            ->setParameter('locale', $locale)
            ->setParameter('query', '%' . $query . '%')
            ->setParameter('channel', $channel)
            ->setParameter('enabled', true);

        // Filter by price if provided
        if ($priceMax > 0) {
            $qb->innerJoin('p.variants', 'variant')
                ->innerJoin('variant.channelPricings', 'pricing')
                ->andWhere('pricing.channelCode = :channelCode')
                ->andWhere('pricing.price <= :priceMax')
                ->setParameter('channelCode', $channel->getCode())
                ->setParameter('priceMax', $priceMax * 100); // Convert to cents
        }

        /** @var array<ProductInterface> $products */
        $products = $qb->setMaxResults($limit)
            ->getQuery()
            ->getResult();

        // Return slug, name and description - AI needs these to talk accurately about products
        $result = [];
        foreach ($products as $product) {
            $code = $product->getCode();
            $slug = $product->getSlug();
            $name = $product->getName();

            // Skip products with missing data (data integrity issue)
            if (!\is_string($code) || !\is_string($slug) || !\is_string($name)) {
                continue;
            }

            $result[] = [
                'code' => $code,
                'slug' => $slug,
                'name' => $name,
                'description' => $product->getShortDescription(),
            ];
        }

        // Wrap in object to avoid Gemini API error - Gemini doesn't accept array at root level
        return ['products' => $result];
    }
}
