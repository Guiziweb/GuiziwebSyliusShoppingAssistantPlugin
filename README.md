# Guiziweb Sylius Shopping Assistant Plugin

An AI-powered shopping assistant for Sylius e-commerce stores. This plugin adds an intelligent chat widget to help customers find products, answer questions, and navigate your store.

## Overview

This plugin provides a customer-facing chat widget powered by AI (OpenAI, Anthropic, etc.) to assist shoppers in real-time. It integrates seamlessly with Sylius and uses the **Guiziweb Sylius AI Platform Bundle** for AI configuration.

## Features

- **Smart Chat Widget**: Interactive chat interface on shop pages
- **AI-Powered Responses**: Natural language understanding using GPT-4, Claude, or other AI models
- **Product Recommendations**: AI assistant helps customers find the right products
- **Order Assistance**: Answer questions about orders, shipping, and policies
- **Multi-Channel Support**: Different AI agents per Sylius channel
- **Conversation History**: Stores chat history for customer context
- **Admin Configuration**: Configure widget appearance, behavior, and AI prompts
- **Markdown Support**: Rich formatted responses with markdown rendering

## Requirements

- PHP 8.2 or higher
- Sylius 2.0 or higher
- **Guiziweb Sylius AI Platform Bundle** (installed automatically as a dependency)
- An API key from OpenAI, Anthropic, or another supported AI provider

## Installation

### Quick Installation (Recommended)

The plugin uses **Symfony Flex** for automatic configuration:

```bash
composer require guiziweb/sylius-shopping-assistant-plugin
```

This will automatically:
- Register the bundle in `config/bundles.php`
- Create configuration files in `config/packages/`
- Add JavaScript imports to `assets/shop/entrypoint.js`
- Install the `marked` npm package for markdown rendering
- Build frontend assets

### Configuration Requirements

To enable Symfony Flex recipes from this repository, add the custom recipe endpoint to your `composer.json`:

```json
{
    "extra": {
        "symfony": {
            "allow-contrib": true,
            "endpoint": [
                "https://api.github.com/repos/Guiziweb/SyliusRecipes/contents/index.json?ref=flex/main",
                "https://api.github.com/repos/Sylius/SyliusRecipes/contents/index.json?ref=flex/main",
                "flex://defaults"
            ]
        }
    }
}
```

**Note:** You also need to set `"minimum-stability": "dev"` and `"prefer-stable": true` in your `composer.json` until a stable release is tagged.

### Post-Installation

1. **Run database migrations:**
   ```bash
   php bin/console doctrine:migrations:migrate -n
   ```

2. **Configure AI Platform** (if not already done):

   Navigate to **Admin Panel → AI Configuration → Platform Configurations** and create a new platform configuration with your AI provider credentials.

3. **Configure AI Agent**:

   Navigate to **Admin Panel → AI Configuration → Agent Configurations** and create an agent for your shopping assistant.

4. **Clear cache:**
   ```bash
   php bin/console cache:clear
   ```

### Database UTF-8 Support

**⚠️ IMPORTANT**: AI responses may contain emojis. Configure UTF-8 support:

**For MySQL**, add to your `.env`:
```
DATABASE_URL=mysql://user:password@host/database?charset=utf8mb4
```

And in `config/packages/doctrine.yaml`:
```yaml
doctrine:
    dbal:
        charset: utf8mb4
        default_table_options:
            charset: utf8mb4
            collate: utf8mb4_unicode_ci
```

**PostgreSQL** uses UTF-8 by default, no configuration needed.

## Configuration

### Chat Widget Configuration

Navigate to **Admin Panel → Configuration → Chat Widget** to configure:

- **Widget Position**: Bottom-right, bottom-left, etc.
- **Widget Colors**: Customize to match your brand
- **AI Agent**: Select which AI agent to use
- **Initial Message**: Welcome message shown to customers
- **Enable/Disable**: Activate or deactivate the widget

### AI Agent Setup

1. **Create Platform Configuration** (Admin → AI Configuration → Platform Configurations):
   - Code: `openai_shop`
   - Provider: OpenAI
   - API Key: Your OpenAI API key

2. **Create Agent Configuration** (Admin → AI Configuration → Agent Configurations):
   - Code: `shopping_assistant`
   - Channel: Select your shop channel
   - Platform: `openai_shop`
   - Model: `gpt-4`
   - System Prompt: Define how the assistant should behave

Example System Prompt:
```
You are a helpful shopping assistant for our online store. Help customers:
- Find products that match their needs
- Answer questions about products, shipping, and returns
- Provide recommendations based on their preferences

Be friendly, concise, and always prioritize customer satisfaction.
```

## Usage

Once configured, the chat widget will automatically appear on your shop pages. Customers can:
- Click the chat icon to start a conversation
- Ask questions about products
- Get recommendations
- Inquire about orders and policies

The AI assistant will use the configured agent to provide intelligent, context-aware responses.

## Maintenance

### Cleaning Old Conversations

Chat conversations are stored in the database and can accumulate over time. Clean them periodically:

```bash
# Delete conversations older than 30 days (default)
php bin/console guiziweb:chat:clean-conversations

# Delete conversations older than 7 days
php bin/console guiziweb:chat:clean-conversations --days=7

# Delete ALL conversations (with confirmation)
php bin/console guiziweb:chat:clean-conversations --all
```

### Automated Cleanup

Add to your crontab:
```bash
# Run daily at 3 AM
0 3 * * * cd /path/to/project && php bin/console guiziweb:chat:clean-conversations
```

## Development

This repository contains a plugin skeleton for testing and development.

### Running Tests

```bash
# PHPUnit
vendor/bin/phpunit

# Behat
vendor/bin/behat

# Code Quality
vendor/bin/phpstan analyse
vendor/bin/ecs check
```

### Test Application Setup

```bash
# Install dependencies
composer install

# Setup test application assets
(cd vendor/sylius/test-application && yarn install && yarn build)
vendor/bin/console assets:install

# Setup database
vendor/bin/console doctrine:database:create
vendor/bin/console doctrine:migrations:migrate -n
vendor/bin/console sylius:fixtures:load -n

# Run local server
symfony server:start -d
```

## License

This plugin is released under the MIT License. See the bundled LICENSE file for details.

## Credits

Developed by Guiziweb for the Sylius e-commerce platform.

## Support

For issues and feature requests, please use the GitHub issue tracker.