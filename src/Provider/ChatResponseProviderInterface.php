<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Provider;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

interface ChatResponseProviderInterface
{
    public function createResponse(Request $request, string $message): JsonResponse;
}
