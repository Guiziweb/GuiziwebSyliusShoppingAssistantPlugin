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

namespace Guiziweb\SyliusShoppingAssistantPlugin\Tool;

use Sylius\Bundle\CoreBundle\Doctrine\ORM\ProductRepository;
use Sylius\Component\Channel\Context\ChannelContextInterface;
use Sylius\Component\Core\Model\ProductInterface;
use Sylius\Component\Core\Model\ProductVariantInterface;
use Sylius\Component\Core\Repository\ProductRepositoryInterface;
use Sylius\Component\Locale\Context\LocaleContextInterface;
use Symfony\AI\Agent\Toolbox\Attribute\AsTool;

#[AsTool(
    name: 'get_product_info',
    description: 'Get detailed product information including description, price, attributes, and reviews. Use this to compare products or provide detailed information to the user.',
)]
final class GetProductInfoTool
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
     * @param string $slug The product slug
     *
     * @return array{slug: string, name: string, description: ?string, price: ?string, attributes: array<string, mixed>, enabled: bool} Product information
     */
    public function __invoke(string $slug): array
    {
        $locale = $this->localeContext->getLocaleCode();
        $channel = $this->channelContext->getChannel();

        /** @var ProductRepository<ProductInterface> $productRepository */
        $productRepository = $this->productRepository;

        /** @var ProductInterface|null $product */
        $product = $productRepository->createQueryBuilder('p')
            ->addSelect('translation')
            ->innerJoin('p.translations', 'translation', 'WITH', 'translation.locale = :locale')
            ->andWhere('translation.slug = :slug')
            ->andWhere(':channel MEMBER OF p.channels')
            ->andWhere('p.enabled = :enabled')
            ->setParameter('locale', $locale)
            ->setParameter('slug', $slug)
            ->setParameter('channel', $channel)
            ->setParameter('enabled', true)
            ->getQuery()
            ->getOneOrNullResult();

        if (!$product) {
            throw new \InvalidArgumentException('Product not found.');
        }

        // Get price from first variant
        $price = null;
        $mainVariant = $product->getVariants()->first();
        /** @var ProductVariantInterface|false $mainVariant */
        if ($mainVariant && $mainVariant->getChannelPricings()->first()) {
            $channelPricing = $mainVariant->getChannelPricings()->first();
            $price = $channelPricing->getPrice();
            // Format price (e.g., "8900" -> "89.00 EUR")
            $price = number_format($price / 100, 2) . ' ' . ($channelPricing->getChannelCode() ?? 'EUR');
        }

        // Get attributes
        $attributes = [];
        foreach ($product->getAttributes() as $attribute) {
            $attributeValue = $attribute->getValue();
            if (null !== $attributeValue && '' !== $attributeValue) {
                $attributes[$attribute->getName()] = $attributeValue;
            }
        }

        $slug = $product->getSlug();
        $name = $product->getName();

        if (!\is_string($slug) || !\is_string($name)) {
            throw new \InvalidArgumentException('Product not available.');
        }

        return [
            'slug' => $slug,
            'name' => $name,
            'description' => $product->getDescription(),
            'price' => $price,
            'attributes' => $attributes,
            'enabled' => $product->isEnabled(),
        ];
    }
}
