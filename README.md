# Guiziweb Sylius Shopping Assistant Plugin

![Build](https://github.com/Guiziweb/GuiziwebSyliusShoppingAssistantPlugin/workflows/CI/badge.svg)
![Packagist Version](https://img.shields.io/packagist/v/guiziweb/sylius-shopping-assistant-plugin)
![PHP](https://img.shields.io/packagist/php-v/guiziweb/sylius-shopping-assistant-plugin)
![License](https://img.shields.io/github/license/Guiziweb/GuiziwebSyliusShoppingAssistantPlugin)
![Status](https://img.shields.io/badge/status-complete-green)

AI-powered shopping assistant plugin for Sylius eCommerce.

## Description

The Guiziweb Sylius Shopping Assistant Plugin adds an intelligent chat widget to your Sylius storefront. Powered by AI (OpenAI, Anthropic, etc.), it helps customers find products, answer questions, and navigate your store in real-time.

This plugin integrates seamlessly with Sylius and uses the **Guiziweb Sylius AI Platform Bundle** for AI configuration.

Part of the [Guiziweb Sylius AI Ecosystem](https://guiziweb.github.io).

## Features

- **Smart Chat Widget**: Interactive chat interface on shop pages
- **AI-Powered Responses**: Natural language understanding using GPT-4, Claude, or other AI models
- **7 Specialized AI Tools**:
  - Product Search: Search catalog by name, description, category with price filtering
  - Product Details: Get complete product information including variants, prices, stock
  - Cart Management: Add/remove items, view cart contents with pricing
  - Visual Product Cards: Display product images and information inline
  - Smart Navigation: Redirect users to cart, checkout, account, or product pages
- **Multi-Channel Support**: Different AI agents per Sylius channel
- **Conversation History**: Stores chat history for customer context
- **Admin Configuration**: Configure widget behavior, AI agent, and welcome message
- **Markdown Support**: Rich formatted responses with markdown rendering
- **Metadata System**: Return structured data (products, redirect URLs) alongside AI responses
- **Rate Limiting**: Built-in protection against abuse

## Requirements

| Dependency | Version | Notes |
|------------|---------|-------|
| PHP | 8.2+ | |
| Sylius | 2.0+ | |
| Symfony | 7.3+ | |
| guiziweb/sylius-ai-platform-bundle | ^1.0 | AI configuration management |
| symfony/ai-agent | @dev | |
| symfony/ai-chat | @dev | |
| symfony/ai-platform | @dev | |
| symfony/rate-limiter | ^7.3 | |

## Installation

1. **Add Guiziweb Flex recipes endpoint** to your `composer.json`:

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

   **Note:** Set `"minimum-stability": "dev"` and `"prefer-stable": true` until stable release.

2. **Require the package via Composer:**

   ```bash
   composer require guiziweb/sylius-shopping-assistant-plugin
   ```

   The Symfony Flex recipe will automatically:

   - Register the bundle in `config/bundles.php`
   - Create configuration files in `config/packages/`
   - Add JavaScript imports to `assets/shop/entrypoint.js`
   - Install the `marked` npm package for markdown rendering

3. **Run database migrations:**

   ```bash
   php bin/console doctrine:migrations:migrate -n
   ```

4. **Configure UTF-8 support for emojis** (MySQL only):

   In `.env`:

   ```env
   DATABASE_URL=mysql://user:password@host/database?charset=utf8mb4
   ```

   In `config/packages/doctrine.yaml`:

   ```yaml
   doctrine:
       dbal:
           charset: utf8mb4
           default_table_options:
               charset: utf8mb4
               collate: utf8mb4_unicode_ci
   ```

5. **Clear cache:**

   ```bash
   php bin/console cache:clear
   ```

## Configuration

### Chat Widget Configuration

Navigate to **Admin Panel → Configuration → Chat Widget**:

- **Channel**: Select which Sylius channel this configuration applies to
- **AI Agent**: Select which AI agent to use for this channel
- **Welcome Message**: Customizable welcome message shown to customers
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

```text
You are a helpful shopping assistant for our online store. Help customers:
- Find products that match their needs
- Answer questions about products, shipping, and returns
- Provide recommendations based on their preferences

Be friendly, concise, and always prioritize customer satisfaction.
```

## Usage

Once configured, the chat widget automatically appears on shop pages. Customers can:

- Click the chat icon to start a conversation
- Ask questions about products
- Get recommendations
- Add items to cart
- Navigate to checkout

### AI Tools Reference

| Tool | Description | Parameters |
|------|-------------|------------|
| **search_products** | Search for products in catalog | `query`, `priceMax` (optional), `limit` (optional) |
| **get_product_info** | Get detailed product information | `slug` |
| **show_product_card** | Display visual product cards | `slugs` (array) |
| **view_cart** | View current shopping cart | None |
| **add_to_cart** | Add product to cart | `productCode`, `productVariantCode` (optional), `quantity` (optional) |
| **remove_from_cart** | Remove product from cart | `productVariantCode` |
| **redirect** | Navigate to specific pages | `route`, `productSlug` (optional) |

### Maintenance

Clean old conversations periodically:

```bash
# Delete conversations older than 30 days (default)
php bin/console guiziweb:chat:clean-conversations

# Delete conversations older than 7 days
php bin/console guiziweb:chat:clean-conversations --days=7

# Delete ALL conversations
php bin/console guiziweb:chat:clean-conversations --all
```

Add to crontab for automation:

```bash
0 3 * * * cd /path/to/project && php bin/console guiziweb:chat:clean-conversations
```

## Testing

```bash
# PHPUnit
vendor/bin/phpunit

# Behat
vendor/bin/behat

# Static analysis
vendor/bin/phpstan analyse

# Coding standards
vendor/bin/ecs check
```

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) before submitting a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Related Plugins

- [Guiziweb Sylius AI Platform Bundle](https://github.com/Guiziweb/GuiziwebSyliusAIPlatformBundle) - Administration interface for AI configuration in Sylius
- [Guiziweb Sylius Semantic Search Plugin](https://github.com/Guiziweb/GuiziwebSyliusSemanticSearchPlugin) - Vector-based semantic search for Sylius products

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
