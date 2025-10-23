import { marked } from 'marked';

// Configure marked for safe rendering
marked.setOptions({
    breaks: true, // Convert \n to <br>
    gfm: true,    // GitHub Flavored Markdown
});

/**
 * Parse markdown in chat conversation messages (admin view)
 */
document.addEventListener('DOMContentLoaded', () => {
    const messageContents = document.querySelectorAll('[data-chat-message-content]');

    messageContents.forEach(element => {
        if (element.querySelector('[data-chat-tool]')) {
            return;
        }

        const rawText = element.textContent.trim();
        if (rawText) {
            element.innerHTML = marked.parse(rawText, { async: false });
        }
    });
});
