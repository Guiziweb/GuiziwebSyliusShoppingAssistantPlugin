<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Command;

use Guiziweb\SyliusShoppingAssistantPlugin\Repository\ChatConversationRepository;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'guiziweb:chat:clean-conversations',
    description: 'Delete old chat conversations',
)]
class CleanOldConversationsCommand extends Command
{
    public function __construct(
        private readonly ChatConversationRepository $conversationRepository,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addOption(
                'days',
                'd',
                InputOption::VALUE_OPTIONAL,
                'Delete conversations older than X days',
                30,
            )
            ->addOption(
                'all',
                'a',
                InputOption::VALUE_NONE,
                'Delete all conversations (use with caution!)',
            )
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $deleteAll = $input->getOption('all');
        $daysOption = $input->getOption('days');
        \assert(\is_scalar($daysOption));
        $days = (int) $daysOption;

        if ($deleteAll) {
            if (!$io->confirm('Are you sure you want to delete ALL conversations?', false)) {
                $io->warning('Aborted.');

                return Command::SUCCESS;
            }

            $count = $this->conversationRepository->deleteAll();
            $io->success(sprintf('Deleted %d conversation(s).', $count));

            return Command::SUCCESS;
        }

        if ($days <= 0) {
            $io->error('Days must be a positive number.');

            return Command::FAILURE;
        }

        $date = new \DateTimeImmutable("-{$days} days");
        $count = $this->conversationRepository->deleteOlderThan($date);

        $io->success(sprintf('Deleted %d conversation(s) older than %d days.', $count, $days));

        return Command::SUCCESS;
    }
}
