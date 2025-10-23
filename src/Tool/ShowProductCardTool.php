<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Tool;

use Guiziweb\SyliusAIPlatformBundle\Tool\ToolInterface;
use Psr\Log\LoggerInterface;
use Symfony\AI\Agent\Toolbox\Attribute\AsTool;

#[AsTool(
    name: 'show_product_card',
    description: 'Display product card(s) with image, name and price. Use this when user asks to see/show products visually. Pass product slugs as array.',
)]
final readonly class ShowProductCardTool implements ToolInterface
{
    public function __construct(
        private LoggerInterface $aiLogger,
    ) {
    }

    /**
     * @param array<string> $slugs Product slugs to display (e.g., ["azure-dream-jeans", "coastal-bliss-jeans"])
     *
     * @return string Confirmation message
     */
    public function __invoke(array $slugs): string
    {
        $this->aiLogger->debug('Displaying product cards', ['count' => count($slugs)]);

        return sprintf('Displaying %d product card(s)', count($slugs));
    }
}
