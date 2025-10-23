<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

final class JsonExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            new TwigFilter('json_pretty', $this->jsonPretty(...)),
        ];
    }

    /**
     * Format a JSON string with pretty print.
     *
     * @param string $json The JSON string to format
     * @return string The formatted JSON string
     */
    public function jsonPretty(string $json): string
    {
        try {
            $decoded = json_decode($json, true, 512, \JSON_THROW_ON_ERROR);
            return json_encode($decoded, \JSON_PRETTY_PRINT | \JSON_UNESCAPED_SLASHES | \JSON_UNESCAPED_UNICODE);
        } catch (\JsonException) {
            return $json; // Return original if parsing fails
        }
    }
}