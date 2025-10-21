<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\EventSubscriber;

use Guiziweb\SyliusShoppingAssistantPlugin\Attribute\RateLimited;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Event\ControllerEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\RateLimiter\RateLimiterFactory;
use Symfony\Contracts\Translation\TranslatorInterface;

final readonly class RateLimitSubscriber implements EventSubscriberInterface
{
    public function __construct(
        #[Autowire(service: 'limiter.chat_messages')]
        private RateLimiterFactory $chatMessagesLimiter,
        private TranslatorInterface $translator,
    ) {
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::CONTROLLER => ['onKernelController', 10],
        ];
    }

    public function onKernelController(ControllerEvent $event): void
    {
        if (!$event->isMainRequest()) {
            return;
        }

        $controller = $event->getController();

        // Controller can be a class or a Closure
        if (!\is_array($controller)) {
            return;
        }

        $controllerObject = $controller[0];
        $method = $controller[1];

        try {
            $reflectionMethod = new \ReflectionMethod($controllerObject, $method);
        } catch (\ReflectionException) {
            return;
        }

        // Check for RateLimited attribute
        $attributes = $reflectionMethod->getAttributes(RateLimited::class);

        if (empty($attributes)) {
            return;
        }

        $request = $event->getRequest();
        $session = $request->getSession();
        $limiter = $this->chatMessagesLimiter->create($session->getId());
        $limit = $limiter->consume(1);

        if (!$limit->isAccepted()) {
            $retryAfter = $limit->getRetryAfter()->getTimestamp() - time();
            $errorMessage = $this->translator->trans('guiziweb.chat.rate_limit_exceeded', [
                '%seconds%' => $retryAfter,
            ]);

            $response = new JsonResponse([
                'error' => $errorMessage,
            ], 429, [
                'X-RateLimit-Retry-After' => (string) $retryAfter,
            ]);

            $event->setController(static fn () => $response);
        }
    }
}
