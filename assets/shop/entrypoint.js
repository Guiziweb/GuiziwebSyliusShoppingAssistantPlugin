// Shop entrypoint
import { parseMarkdown } from './chat';
import './chat-widget';
import './chat-widget.scss';

// Expose parseMarkdown globally for backward compatibility
window.ChatMarkdown = { parseMarkdown };