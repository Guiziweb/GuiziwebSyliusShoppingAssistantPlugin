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
        $this->skipIf(
            !$this->connection->getDatabasePlatform() instanceof \Doctrine\DBAL\Platforms\MySQLPlatform &&
            !$this->connection->getDatabasePlatform() instanceof \Doctrine\DBAL\Platforms\PostgreSQLPlatform,
            'Migration can only be executed safely on \'mysql\' or \'postgresql\'.'
        );

        // Chat conversation table
        $this->addSql('CREATE TABLE guiziweb_shopping_assistant_chat_conversation (id INT NOT NULL, customer_id INT DEFAULT NULL, channel_id INT NOT NULL, session_id VARCHAR(255) DEFAULT NULL, messagesData TEXT DEFAULT NULL, createdAt TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, updatedAt TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_189D78F89395C3F3 ON guiziweb_shopping_assistant_chat_conversation (customer_id)');
        $this->addSql('CREATE INDEX IDX_189D78F872F5A1AA ON guiziweb_shopping_assistant_chat_conversation (channel_id)');
        $this->addSql('CREATE INDEX idx_conversation_customer ON guiziweb_shopping_assistant_chat_conversation (customer_id, channel_id)');
        $this->addSql('CREATE INDEX idx_conversation_session ON guiziweb_shopping_assistant_chat_conversation (session_id, channel_id)');

        // Chat widget config translation table
        $this->addSql('CREATE TABLE guiziweb_shopping_assistant_chat_widget_config_translation (id INT NOT NULL, translatable_id INT NOT NULL, locale VARCHAR(5) NOT NULL, welcomeMessage TEXT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_E29472D22C2AC5D3 ON guiziweb_shopping_assistant_chat_widget_config_translation (translatable_id)');
        $this->addSql('CREATE UNIQUE INDEX guiziweb_chat_widget_translation_uniq ON guiziweb_shopping_assistant_chat_widget_config_translation (translatable_id, locale)');

        // Chat widget configuration table
        $this->addSql('CREATE TABLE guiziweb_shopping_assistant_chat_widget_configuration (id INT NOT NULL, agent_id INT NOT NULL, channel_id INT NOT NULL, enabled BOOLEAN NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_D2C681AE3414710B ON guiziweb_shopping_assistant_chat_widget_configuration (agent_id)');
        $this->addSql('CREATE UNIQUE INDEX unique_channel ON guiziweb_shopping_assistant_chat_widget_configuration (channel_id)');

        // Add sequences for PostgreSQL
        if ($this->connection->getDatabasePlatform() instanceof \Doctrine\DBAL\Platforms\PostgreSQLPlatform) {
            $this->addSql('CREATE SEQUENCE guiziweb_shopping_assistant_chat_conversation_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
            $this->addSql('CREATE SEQUENCE guiziweb_shopping_assistant_chat_widget_config_translation_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
            $this->addSql('CREATE SEQUENCE guiziweb_shopping_assistant_chat_widget_configuration_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
            $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_conversation ALTER COLUMN id SET DEFAULT nextval(\'guiziweb_shopping_assistant_chat_conversation_id_seq\')');
            $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_widget_config_translation ALTER COLUMN id SET DEFAULT nextval(\'guiziweb_shopping_assistant_chat_widget_config_translation_id_seq\')');
            $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_widget_configuration ALTER COLUMN id SET DEFAULT nextval(\'guiziweb_shopping_assistant_chat_widget_configuration_id_seq\')');
            $this->addSql('COMMENT ON COLUMN guiziweb_shopping_assistant_chat_conversation.createdAt IS \'(DC2Type:datetime_immutable)\'');
            $this->addSql('COMMENT ON COLUMN guiziweb_shopping_assistant_chat_conversation.updatedAt IS \'(DC2Type:datetime_immutable)\'');
        }

        // Add AUTO_INCREMENT for MySQL
        if ($this->connection->getDatabasePlatform() instanceof \Doctrine\DBAL\Platforms\MySQLPlatform) {
            $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_conversation MODIFY id INT AUTO_INCREMENT');
            $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_widget_config_translation MODIFY id INT AUTO_INCREMENT');
            $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_widget_configuration MODIFY id INT AUTO_INCREMENT');
            $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_conversation MODIFY messagesData LONGTEXT DEFAULT NULL');
            $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_conversation MODIFY createdAt DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\'');
            $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_conversation MODIFY updatedAt DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\'');
            $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_widget_config_translation MODIFY welcomeMessage LONGTEXT NOT NULL');
            $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_widget_configuration MODIFY enabled TINYINT(1) NOT NULL');
            $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_conversation DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
            $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_widget_config_translation DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
            $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_widget_configuration DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        }

        // Foreign keys
        $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_conversation ADD CONSTRAINT FK_189D78F89395C3F3 FOREIGN KEY (customer_id) REFERENCES sylius_customer (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_conversation ADD CONSTRAINT FK_189D78F872F5A1AA FOREIGN KEY (channel_id) REFERENCES sylius_channel (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_widget_config_translation ADD CONSTRAINT FK_E29472D22C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES guiziweb_shopping_assistant_chat_widget_configuration (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_widget_configuration ADD CONSTRAINT FK_D2C681AE3414710B FOREIGN KEY (agent_id) REFERENCES guiziweb_ai_agent_configuration (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_widget_configuration ADD CONSTRAINT FK_D2C681AE72F5A1AA FOREIGN KEY (channel_id) REFERENCES sylius_channel (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_conversation DROP CONSTRAINT FK_189D78F89395C3F3');
        $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_conversation DROP CONSTRAINT FK_189D78F872F5A1AA');
        $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_widget_config_translation DROP CONSTRAINT FK_E29472D22C2AC5D3');
        $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_widget_configuration DROP CONSTRAINT FK_D2C681AE3414710B');
        $this->addSql('ALTER TABLE guiziweb_shopping_assistant_chat_widget_configuration DROP CONSTRAINT FK_D2C681AE72F5A1AA');
        $this->addSql('DROP TABLE guiziweb_shopping_assistant_chat_conversation');
        $this->addSql('DROP TABLE guiziweb_shopping_assistant_chat_widget_config_translation');
        $this->addSql('DROP TABLE guiziweb_shopping_assistant_chat_widget_configuration');

        // Drop sequences for PostgreSQL
        if ($this->connection->getDatabasePlatform() instanceof \Doctrine\DBAL\Platforms\PostgreSQLPlatform) {
            $this->addSql('DROP SEQUENCE guiziweb_shopping_assistant_chat_conversation_id_seq');
            $this->addSql('DROP SEQUENCE guiziweb_shopping_assistant_chat_widget_config_translation_id_seq');
            $this->addSql('DROP SEQUENCE guiziweb_shopping_assistant_chat_widget_configuration_id_seq');
        }
    }
}