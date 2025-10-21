<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Collector;

final class ChatToolMetadataCollector
{
    /** @var array<int, string> */
    private array $products = [];

    private ?string $redirectUrl = null;

    /**
     * @param array<int, string> $products Array of product slugs
     */
    public function addProducts(array $products): void
    {
        $this->products = $products;
    }

    /**
     * @return array<int, string>|null Array of product slugs
     */
    public function getProducts(): ?array
    {
        return $this->products !== [] ? $this->products : null;
    }

    public function setRedirectUrl(string $url): void
    {
        $this->redirectUrl = $url;
    }

    public function getRedirectUrl(): ?string
    {
        return $this->redirectUrl;
    }

    public function clear(): void
    {
        $this->products = [];
        $this->redirectUrl = null;
    }

    public function hasMetadata(): bool
    {
        return $this->products !== [] || $this->redirectUrl !== null;
    }
}
