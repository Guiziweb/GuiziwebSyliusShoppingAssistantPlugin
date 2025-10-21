import { parseMarkdown } from './chat';

/**
 * Chat Widget Handler
 * Auto-initializes chat functionality when the widget is present in the DOM
 */
class ChatWidget {
    constructor(element) {
        this.element = element;
        this.messagesContainer = element.querySelector('[data-chat-target="messages"]');
        this.form = element.querySelector('[data-chat-target="form"]');
        this.input = element.querySelector('[data-chat-target="input"]');
        this.submitBtn = element.querySelector('[data-chat-target="submit"]');

        this.chatUrl = element.dataset.chatUrlValue;
        this.productCardsUrl = element.dataset.chatProductCardsUrlValue;
        this.csrfToken = element.dataset.csrfToken;

        console.log('ChatWidget initialized', {
            chatUrl: this.chatUrl,
            productCardsUrl: this.productCardsUrl,
            element: element
        });

        this.init();
    }

    init() {
        this.parseExistingMessages();
        this.reopenChatIfNeeded();
        this.attachFormHandler();
    }

    parseExistingMessages() {
        if (!this.messagesContainer) return;

        this.messagesContainer.querySelectorAll('[data-chat-target="message-content"]').forEach(el => {
            el.innerHTML = parseMarkdown(el.textContent.trim());
        });
    }

    reopenChatIfNeeded() {
        const shouldReopen = sessionStorage.getItem('chat_keep_open') === 'true';
        if (!shouldReopen) return;

        sessionStorage.removeItem('chat_keep_open');

        // DOM is already ready since we're called from DOMContentLoaded
        const chatOffcanvas = this.element.querySelector('[data-chat-target="offcanvas"]');
        if (chatOffcanvas && typeof bootstrap !== 'undefined') {
            const bsOffcanvas = new bootstrap.Offcanvas(chatOffcanvas);
            bsOffcanvas.show();
            chatOffcanvas.addEventListener('shown.bs.offcanvas', () => {
                this.scrollToBottom();
            }, { once: true });
        }
    }

    attachFormHandler() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    async handleSubmit(event) {
        event.preventDefault();

        const message = this.input.value.trim();
        if (!message) return;

        // Disable form during request
        this.input.disabled = true;
        this.submitBtn.disabled = true;
        this.submitBtn.dataset.loading = 'true';

        // Add user message
        this.addMessage('user', message);
        this.input.value = '';

        // Create assistant message with loading state
        const assistantEl = this.addMessage('assistant', '');
        assistantEl.dataset.loading = 'true';

        // Show loading indicator
        const contentEl = assistantEl.querySelector('[data-chat-target="message-content"]');
        const loadingTemplate = this.element.querySelector('[data-chat-target="loading-template"]');
        contentEl.innerHTML = loadingTemplate.innerHTML;

        try {
            const response = await fetch(this.chatUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                },
                body: JSON.stringify({
                    message,
                    _csrf_token: this.csrfToken
                }),
                credentials: 'same-origin',
            });

            const data = await response.json();

            if (data.error) {
                const contentEl = assistantEl.querySelector('[data-chat-target="message-content"]');
                contentEl.classList.add('alert', 'alert-danger');
                contentEl.textContent = data.error;
                return;
            }

            // Display response
            assistantEl.querySelector('[data-chat-target="message-content"]').innerHTML = parseMarkdown(data.response);
            this.scrollToBottom();

            // Handle products if present
            if (data.products && data.products.length > 0) {
                await this.loadProductCards(assistantEl, data.products);
            }

            // Handle redirect if present
            if (data.redirect_url) {
                sessionStorage.setItem('chat_keep_open', 'true');
                setTimeout(() => window.location.href = data.redirect_url, 1000);
            }
        } catch (error) {
            console.error('Chat error:', error);
            const contentEl = assistantEl.querySelector('[data-chat-target="message-content"]');
            contentEl.classList.add('alert', 'alert-danger');
            contentEl.textContent = 'Connection error';
        } finally {
            delete assistantEl.dataset.loading;
            delete this.submitBtn.dataset.loading;
            this.input.disabled = false;
            this.submitBtn.disabled = false;
            this.input.focus();
        }
    }

    addMessage(role, content) {
        if (!this.messagesContainer) return null;

        const template = this.element.querySelector('[data-chat-target="message-template"]');
        const clone = template.content.cloneNode(true);
        const div = clone.querySelector('[data-chat-target="message"]');

        div.dataset.role = role;
        div.querySelector('[data-chat-target="message-content"]').textContent = content;

        this.messagesContainer.appendChild(clone);
        this.scrollToBottom();

        return div;
    }

    async loadProductCards(messageElement, slugs) {
        try {
            const response = await fetch(this.productCardsUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                },
                body: JSON.stringify({ slugs }),
            });

            const result = await response.json();

            if (result.html) {
                const productsContainer = messageElement.querySelector('[data-chat-target="products"]');
                if (productsContainer) {
                    productsContainer.innerHTML = result.html;
                    productsContainer.classList.remove('d-none');
                    this.scrollToBottom();
                }
            }
        } catch (error) {
            console.error('Error loading product cards:', error);
        }
    }

    scrollToBottom() {
        if (this.messagesContainer) {
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        }
    }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const chatElement = document.querySelector('[data-chat-widget]');
    if (chatElement) {
        new ChatWidget(chatElement);
    }
});