<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Repository;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Guiziweb\SyliusShoppingAssistantPlugin\Entity\ChatConversation;
use Sylius\Bundle\ResourceBundle\Doctrine\ORM\ResourceRepositoryTrait;
use Sylius\Component\Channel\Model\ChannelInterface;
use Sylius\Component\Customer\Model\CustomerInterface;
use Sylius\Resource\Doctrine\Persistence\RepositoryInterface;

/**
 * @extends ServiceEntityRepository<ChatConversation>
 * @implements RepositoryInterface<ChatConversation>
 */
final class ChatConversationRepository extends ServiceEntityRepository implements RepositoryInterface
{
    use ResourceRepositoryTrait;

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ChatConversation::class);
    }

    public function findOneByCustomerAndChannel(
        CustomerInterface $customer,
        ChannelInterface $channel,
    ): ?ChatConversation {
        return $this->findOneBy([
            'customer' => $customer,
            'channel' => $channel,
        ]);
    }

    /**
     * Delete conversations older than the given date.
     *
     * @return int Number of deleted conversations
     */
    public function deleteOlderThan(\DateTimeImmutable $date): int
    {
        $result = $this->createQueryBuilder('c')
            ->delete()
            ->where('c.updatedAt < :date')
            ->setParameter('date', $date)
            ->getQuery()
            ->execute();

        \assert(\is_int($result));

        return $result;
    }

    /**
     * Delete all conversations.
     *
     * @return int Number of deleted conversations
     */
    public function deleteAll(): int
    {
        $result = $this->createQueryBuilder('c')
            ->delete()
            ->getQuery()
            ->execute();

        \assert(\is_int($result));

        return $result;
    }
}
