<?php

declare(strict_types=1);

namespace Guiziweb\SyliusShoppingAssistantPlugin\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20251020101515 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE guiziweb_shopping_assistant_chat_conversation (id INT AUTO_INCREMENT NOT NULL, customer_id INT DEFAULT NULL, channel_id INT NOT NULL, session_id VARCHAR(255) DEFAULT NULL, messagesData LONGTEXT DEFAULT NULL, createdAt DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updatedAt DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_189D78F89395C3F3 (customer_id), INDEX IDX_189D78F872F5A1AA (channel_id), INDEX idx_conversation_customer (customer_id, channel_id), INDEX idx_conversation_session (session_id, channel_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE guiziweb_shopping_assistant_chat_widget_config_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT NOT NULL, locale VARCHAR(5) NOT NULL, welcomeMessage LONGTEXT NOT NULL, INDEX IDX_E29472D22C2AC5D3 (translatable_id), UNIQUE INDEX guiziweb_chat_widget_translation_uniq (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE guiziweb_shopping_assistant_chat_widget_configuration (id INT AUTO_INCREMENT NOT NULL, agent_id INT NOT NULL, channel_id INT NOT NULL, enabled TINYINT(1) NOT NULL, INDEX IDX_D2C681AE3414710B (agent_id), UNIQUE INDEX unique_channel (channel_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_conversation ADD CONSTRAINT FK_189D78F89395C3F3 FOREIGN KEY (customer_id) REFERENCES sylius_customer (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_conversation ADD CONSTRAINT FK_189D78F872F5A1AA FOREIGN KEY (channel_id) REFERENCES sylius_channel (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_widget_config_translation ADD CONSTRAINT FK_E29472D22C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES guiziweb_shopping_assistant_chat_widget_configuration (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_widget_configuration ADD CONSTRAINT FK_D2C681AE3414710B FOREIGN KEY (agent_id) REFERENCES guiziweb_ai_agent_configuration (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_widget_configuration ADD CONSTRAINT FK_D2C681AE72F5A1AA FOREIGN KEY (channel_id) REFERENCES sylius_channel (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_conversation DROP FOREIGN KEY FK_189D78F89395C3F3');
        $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_conversation DROP FOREIGN KEY FK_189D78F872F5A1AA');
        $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_widget_config_translation DROP FOREIGN KEY FK_E29472D22C2AC5D3');
        $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_widget_configuration DROP FOREIGN KEY FK_D2C681AE3414710B');
        $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_widget_configuration DROP FOREIGN KEY FK_D2C681AE72F5A1AA');
        $this->addSql('DROP TABLE guiziweb_shopping_assistant_chat_conversation');
        $this->addSql('DROP TABLE guiziweb_shopping_assistant_chat_widget_config_translation');
        $this->addSql('DROP TABLE guiziweb_shopping_assistant_chat_widget_configuration');
    }
}
