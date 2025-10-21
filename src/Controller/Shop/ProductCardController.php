<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Controller\Shop;

use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\UX\TwigComponent\ComponentRendererInterface;

#[Route(
    path: '/chat/product-cards',
    name: 'guiziweb_shop_chat_product_cards',
    methods: ['POST'],
)]
final class ProductCardController extends AbstractController
{
    public function __construct(
        private readonly ComponentRendererInterface $componentRenderer,
        private readonly LoggerInterface $aiLogger,
    ) {
    }

    public function __invoke(Request $request): Response
    {
        try {
            $data = json_decode($request->getContent(), true, 512, \JSON_THROW_ON_ERROR);
        } catch (\JsonException) {
            return new JsonResponse(['error' => 'Invalid JSON'], Response::HTTP_BAD_REQUEST);
        }

        if (!is_array($data)) {
            return new JsonResponse(['error' => 'Invalid request'], Response::HTTP_BAD_REQUEST);
        }

        $slugs = $data['slugs'] ?? [];

        if (!is_array($slugs) || empty($slugs)) {
            return new JsonResponse(['error' => 'Invalid slugs'], Response::HTTP_BAD_REQUEST);
        }

        // Security: limit number of products to prevent abuse
        if (count($slugs) > 20) {
            return new JsonResponse(['error' => 'Too many products requested'], Response::HTTP_BAD_REQUEST);
        }

        $html = '';
        foreach ($slugs as $slug) {
            // Validate slug format (basic security check)
            if (!is_string($slug) || !preg_match('/^[a-z0-9-]+$/', $slug)) {
                continue; // Skip invalid slugs
            }

            // Render Sylius product card component using slug
            try {
                $cardHtml = $this->componentRenderer->createAndRender('sylius_shop:product:card', [
                    'slug' => $slug,
                    'template' => '@SyliusShop/product/common/card.html.twig',
                ]);
                $html .= $cardHtml;
            } catch (\Throwable $e) {
                // Skip products that fail to render
                $this->aiLogger->error('Failed to render product card', [
                    'slug' => $slug,
                    'exception' => $e->getMessage(),
                ]);

                continue;
            }
        }

        return new JsonResponse(['html' => $html]);
    }
}
