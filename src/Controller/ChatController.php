<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Controller;

use Guiziweb\SyliusShoppingAssistantPlugin\Attribute\RateLimited;
use Guiziweb\SyliusShoppingAssistantPlugin\Provider\ChatResponseProviderInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

final class ChatController extends AbstractController
{
    public function __construct(
        private readonly ChatResponseProviderInterface $responseProvider,
        private readonly CsrfTokenManagerInterface $csrfTokenManager,
    ) {
    }

    #[Route('/{_locale}/chat', name: 'guiziweb_shop_chat', methods: ['POST'])]
    #[RateLimited]
    public function chat(Request $request): Response
    {
        // Parse JSON
        try {
            $data = json_decode($request->getContent(), true, 512, \JSON_THROW_ON_ERROR);
        } catch (\JsonException) {
            return new Response('Invalid JSON', Response::HTTP_BAD_REQUEST);
        }

        if (!is_array($data)) {
            return new Response('Invalid request', Response::HTTP_BAD_REQUEST);
        }

        // Validate CSRF token (following Sylius pattern)
        $csrfToken = $data['_csrf_token'] ?? '';
        if (!$this->csrfTokenManager->isTokenValid(new CsrfToken('chat', $csrfToken))) {
            return new Response('Invalid CSRF token', Response::HTTP_FORBIDDEN);
        }

        $message = $data['message'] ?? null;

        if (!is_string($message) || $message === '') {
            return new Response('Message is required', Response::HTTP_BAD_REQUEST);
        }

        // Delegate to provider
        return $this->responseProvider->createResponse($request, $message);
    }
}
