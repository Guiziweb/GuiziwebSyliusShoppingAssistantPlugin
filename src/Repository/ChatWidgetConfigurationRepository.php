<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Repository;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Guiziweb\SyliusShoppingAssistantPlugin\Entity\ChatWidgetConfiguration;
use Sylius\Bundle\ResourceBundle\Doctrine\ORM\ResourceRepositoryTrait;
use Sylius\Component\Channel\Model\ChannelInterface;
use Sylius\Resource\Doctrine\Persistence\RepositoryInterface;

/**
 * @extends ServiceEntityRepository<ChatWidgetConfiguration>
 * @implements RepositoryInterface<ChatWidgetConfiguration>
 */
final class ChatWidgetConfigurationRepository extends ServiceEntityRepository implements RepositoryInterface
{
    use ResourceRepositoryTrait;

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ChatWidgetConfiguration::class);
    }

    public function findOneByChannel(ChannelInterface $channel): ?ChatWidgetConfiguration
    {
        return $this->findOneBy(['channel' => $channel]);
    }
}
