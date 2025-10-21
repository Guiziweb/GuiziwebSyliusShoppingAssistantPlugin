<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\EventSubscriber;

use Guiziweb\SyliusShoppingAssistantPlugin\Collector\ChatToolMetadataCollector;
use Guiziweb\SyliusShoppingAssistantPlugin\Tool\RedirectTool;
use Guiziweb\SyliusShoppingAssistantPlugin\Tool\ShowProductCardTool;
use Psr\Log\LoggerInterface;
use Symfony\AI\Agent\Toolbox\Event\ToolCallSucceeded;
use Symfony\Component\EventDispatcher\Attribute\AsEventListener;

#[AsEventListener(event: ToolCallSucceeded::class)]
final readonly class CollectToolMetadataSubscriber
{
    public function __construct(
        private ChatToolMetadataCollector $metadataCollector,
        private LoggerInterface $aiLogger,
    ) {
    }

    public function __invoke(ToolCallSucceeded $event): void
    {
        $tool = $event->getTool();
        $result = $event->getResult()->getResult();

        $this->aiLogger->debug('Tool call succeeded', [
            'tool' => get_class($tool),
            'result_type' => gettype($result),
        ]);

        if ($tool instanceof ShowProductCardTool) {
            $toolCall = $event->getResult()->getToolCall();
            $slugs = $toolCall->getArguments()['slugs'] ?? [];

            if (!is_array($slugs)) {
                return;
            }

            foreach ($slugs as $key => $slug) {
                if (!is_string($slug)) {
                    $this->aiLogger->error('Invalid slug type in ShowProductCardTool arguments', [
                        'key' => $key,
                        'type' => get_debug_type($slug),
                    ]);

                    return;
                }
            }

            if (empty($slugs)) {
                return;
            }

            $this->aiLogger->debug('Showing product cards', ['count' => count($slugs)]);
            $this->metadataCollector->addProducts($slugs);
        }

        // Collect redirect URL from RedirectTool
        if ($tool instanceof RedirectTool && is_string($result)) {
            $this->aiLogger->debug('Storing redirect URL', ['url' => $result]);
            $this->metadataCollector->setRedirectUrl($result);
        }
    }
}
