import { marked } from 'marked';

// Configure marked for safe rendering
marked.setOptions({
    breaks: true, // Convert \n to <br>
    gfm: true,    // GitHub Flavored Markdown
});

export function parseMarkdown(text) {
    if (!text) return text;

    // Use marked to parse markdown
    return marked.parse(text, { async: false });
}