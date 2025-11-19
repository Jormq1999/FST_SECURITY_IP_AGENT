/**
 * Team Information Portal - Chat Module
 * ==========================================================================
 * Note: AI backend integration will be implemented in Week 5-7
 */

const Chat = {
    messages: [],
    
    /**
     * Initialize chat
     */
    init() {
        this.setupChatInput();
        this.setupChatActions();
    },
    
    /**
     * Set up chat input
     */
    setupChatInput() {
        const chatInput = document.getElementById('chatInput');
        const chatSendBtn = document.getElementById('chatSendBtn');
        
        if (chatInput) {
            // Handle input changes
            chatInput.addEventListener('input', (e) => {
                this.handleInputChange(e.target.value);
                
                // Auto-resize textarea
                e.target.style.height = 'auto';
                e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
            });
            
            // Handle keyboard shortcuts
            chatInput.addEventListener('keydown', (e) => {
                // Send on Enter (without Shift)
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    if (chatInput.value.trim()) {
                        this.sendMessage(chatInput.value.trim());
                    }
                }
            });
        }
        
        if (chatSendBtn) {
            chatSendBtn.addEventListener('click', () => {
                if (chatInput && chatInput.value.trim()) {
                    this.sendMessage(chatInput.value.trim());
                }
            });
        }
    },
    
    /**
     * Set up chat actions
     */
    setupChatActions() {
        // Add click handlers for suggestion items
        const suggestions = document.querySelectorAll('.chat-suggestions li');
        suggestions.forEach(item => {
            item.addEventListener('click', () => {
                const chatInput = document.getElementById('chatInput');
                if (chatInput) {
                    chatInput.value = item.textContent;
                    chatInput.focus();
                }
            });
        });
    },
    
    /**
     * Handle input changes
     */
    handleInputChange(value) {
        const chatSendBtn = document.getElementById('chatSendBtn');
        
        if (chatSendBtn) {
            // Enable/disable send button
            if (value.trim()) {
                chatSendBtn.disabled = false;
            } else {
                chatSendBtn.disabled = true;
            }
        }
    },
    
    /**
     * Send message (placeholder - will connect to AI backend in Week 5-7)
     */
    sendMessage(message) {
        console.log('💬 Sending message:', message);
        
        // Add user message
        this.addMessage('user', message);
        
        // Clear input
        const chatInput = document.getElementById('chatInput');
        if (chatInput) {
            chatInput.value = '';
            chatInput.style.height = 'auto';
            this.handleInputChange('');
        }
        
        // Simulate AI response (placeholder)
        setTimeout(() => {
            this.addMessage('assistant', 
                `Thank you for your message! 🤖\n\n` +
                `The AI backend is being developed in **Week 5-7** of our roadmap. ` +
                `Once complete, I'll be able to:\n\n` +
                `• Answer questions about the portal content\n` +
                `• Search across all documentation\n` +
                `• Provide relevant recommendations\n` +
                `• Help with onboarding tasks\n\n` +
                `For now, you can use the search function (Ctrl+K) to find information.`
            );
        }, 1000);
    },
    
    /**
     * Add message to chat
     */
    addMessage(role, content) {
        const message = {
            id: Date.now(),
            role,
            content,
            timestamp: new Date()
        };
        
        this.messages.push(message);
        this.renderMessage(message);
        this.scrollToBottom();
    },
    
    /**
     * Render message in chat
     */
    renderMessage(message) {
        const chatBody = document.getElementById('chatBody');
        if (!chatBody) return;
        
        // Remove welcome message if it exists
        const welcome = chatBody.querySelector('.chat-welcome');
        if (welcome) {
            welcome.remove();
        }
        
        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message chat-message-${message.role}`;
        messageDiv.dataset.messageId = message.id;
        
        const timeString = message.timestamp.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        const icon = message.role === 'user' ? '👤' : '🤖';
        const name = message.role === 'user' ? 'You' : 'Assistant';
        
        messageDiv.innerHTML = `
            <div class="message-header">
                <span class="message-icon">${icon}</span>
                <span class="message-author">${name}</span>
                <span class="message-time">${timeString}</span>
            </div>
            <div class="message-content">${this.formatMessage(message.content)}</div>
            ${message.role === 'assistant' ? `
                <div class="message-actions">
                    <button class="message-action-btn" onclick="Chat.copyMessage(${message.id})" title="Copy">
                        <span>📋</span>
                    </button>
                    <button class="message-action-btn" onclick="Chat.provideFeedback(${message.id}, 'positive')" title="Helpful">
                        <span>👍</span>
                    </button>
                    <button class="message-action-btn" onclick="Chat.provideFeedback(${message.id}, 'negative')" title="Not helpful">
                        <span>👎</span>
                    </button>
                </div>
            ` : ''}
        `;
        
        chatBody.appendChild(messageDiv);
    },
    
    /**
     * Format message content (basic Markdown-like formatting)
     */
    formatMessage(content) {
        // Convert line breaks
        let formatted = content.replace(/\n/g, '<br>');
        
        // Bold (**text**)
        formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        // Italic (*text*)
        formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
        
        // Code (`code`)
        formatted = formatted.replace(/`(.*?)`/g, '<code>$1</code>');
        
        // Bullet points (•)
        formatted = formatted.replace(/^•\s/gm, '<span class="bullet">•</span> ');
        
        return formatted;
    },
    
    /**
     * Scroll chat to bottom
     */
    scrollToBottom() {
        const chatBody = document.getElementById('chatBody');
        if (chatBody) {
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    },
    
    /**
     * Copy message to clipboard
     */
    copyMessage(messageId) {
        const message = this.messages.find(m => m.id === messageId);
        if (message) {
            navigator.clipboard.writeText(message.content).then(() => {
                console.log('✓ Message copied to clipboard');
                if (window.App) {
                    window.App.showNotification('Message copied to clipboard', 'success');
                }
            });
        }
    },
    
    /**
     * Provide feedback on message
     */
    provideFeedback(messageId, type) {
        console.log(`Feedback for message ${messageId}: ${type}`);
        
        const message = this.messages.find(m => m.id === messageId);
        if (message) {
            message.feedback = type;
            
            // Visual feedback
            const messageDiv = document.querySelector(`[data-message-id="${messageId}"]`);
            if (messageDiv) {
                const actions = messageDiv.querySelector('.message-actions');
                if (actions) {
                    actions.innerHTML = `
                        <span class="feedback-thanks">
                            ${type === 'positive' ? '👍' : '👎'} Thanks for your feedback!
                        </span>
                    `;
                }
            }
            
            // TODO: Send feedback to backend (Week 5-7)
            console.log('Feedback saved:', { messageId, type });
        }
    },
    
    /**
     * Clear chat history
     */
    clearChat() {
        this.messages = [];
        const chatBody = document.getElementById('chatBody');
        if (chatBody) {
            chatBody.innerHTML = `
                <div class="chat-welcome">
                    <div class="chat-welcome-icon">🤖</div>
                    <h3>Welcome to AI Assistant!</h3>
                    <p>I can help you find information quickly. Try asking me:</p>
                    <ul class="chat-suggestions">
                        <li>"How do I set up CSME?"</li>
                        <li>"Where can I find design guidelines?"</li>
                        <li>"What are the validation procedures?"</li>
                    </ul>
                    <p class="chat-note">💡 <strong>Note:</strong> AI backend coming in Week 5-7!</p>
                </div>
            `;
        }
    }
};

// Initialize chat when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Chat.init());
} else {
    Chat.init();
}

// Export for use in other modules
window.Chat = Chat;
