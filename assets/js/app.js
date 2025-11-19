/**
 * Team Information Portal - Main Application
 * ==========================================================================
 */

// Application State
const App = {
    state: {
        sidebarCollapsed: false,
        chatPanelVisible: true,
        searchModalOpen: false,
        mobileMenuOpen: false
    },
    
    /**
     * Initialize the application
     */
    init() {
        console.log('🚀 Team Portal initializing...');
        
        // Check for saved preferences
        this.loadPreferences();
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Initialize components
        this.initializeComponents();
        
        console.log('✅ Team Portal ready!');
    },
    
    /**
     * Load user preferences from localStorage
     */
    loadPreferences() {
        const theme = localStorage.getItem('theme') || 'light';
        document.body.setAttribute('data-theme', theme);
        
        const sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
        if (sidebarCollapsed) {
            this.state.sidebarCollapsed = true;
            document.querySelector('.main-container').classList.add('sidebar-collapsed');
        }
        
        const chatHidden = localStorage.getItem('chatHidden') === 'true';
        if (chatHidden) {
            this.state.chatPanelVisible = false;
            document.querySelector('.main-container').classList.add('chat-hidden');
            document.getElementById('chatPanel').classList.add('hidden');
        }
    },
    
    /**
     * Set up all event listeners
     */
    setupEventListeners() {
        // Sidebar collapse button
        const sidebarCollapseBtn = document.getElementById('sidebarCollapseBtn');
        if (sidebarCollapseBtn) {
            sidebarCollapseBtn.addEventListener('click', () => this.toggleSidebar());
        }
        
        // Chat panel buttons
        const chatCloseBtn = document.getElementById('chatCloseBtn');
        const chatMinimizeBtn = document.getElementById('chatMinimizeBtn');
        const openChatBtn = document.getElementById('openChatBtn');
        
        if (chatCloseBtn) {
            chatCloseBtn.addEventListener('click', () => this.toggleChatPanel());
        }
        
        if (chatMinimizeBtn) {
            chatMinimizeBtn.addEventListener('click', () => this.toggleChatPanel());
        }
        
        if (openChatBtn) {
            openChatBtn.addEventListener('click', () => this.openChatPanel());
        }
        
        // Handle window resize
        window.addEventListener('resize', () => this.handleResize());
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    },
    
    /**
     * Initialize components
     */
    initializeComponents() {
        // Add fade-in animation to cards
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 50}ms`;
            card.classList.add('fade-in');
        });
    },
    
    /**
     * Toggle sidebar collapsed state
     */
    toggleSidebar() {
        this.state.sidebarCollapsed = !this.state.sidebarCollapsed;
        const mainContainer = document.querySelector('.main-container');
        const sidebar = document.getElementById('sidebar');
        const collapseBtn = document.getElementById('sidebarCollapseBtn');
        
        if (this.state.sidebarCollapsed) {
            mainContainer.classList.add('sidebar-collapsed');
            sidebar.classList.add('collapsed');
            if (collapseBtn) {
                collapseBtn.querySelector('.icon').textContent = '▶';
                collapseBtn.querySelector('.text').textContent = 'Expand';
            }
        } else {
            mainContainer.classList.remove('sidebar-collapsed');
            sidebar.classList.remove('collapsed');
            if (collapseBtn) {
                collapseBtn.querySelector('.icon').textContent = '◀';
                collapseBtn.querySelector('.text').textContent = 'Collapse';
            }
        }
        
        localStorage.setItem('sidebarCollapsed', this.state.sidebarCollapsed);
    },
    
    /**
     * Toggle chat panel visibility
     */
    toggleChatPanel() {
        this.state.chatPanelVisible = !this.state.chatPanelVisible;
        const mainContainer = document.querySelector('.main-container');
        const chatPanel = document.getElementById('chatPanel');
        
        if (this.state.chatPanelVisible) {
            mainContainer.classList.remove('chat-hidden');
            chatPanel.classList.remove('hidden');
        } else {
            mainContainer.classList.add('chat-hidden');
            chatPanel.classList.add('hidden');
        }
        
        localStorage.setItem('chatHidden', !this.state.chatPanelVisible);
    },
    
    /**
     * Open chat panel (always visible)
     */
    openChatPanel() {
        this.state.chatPanelVisible = true;
        const mainContainer = document.querySelector('.main-container');
        const chatPanel = document.getElementById('chatPanel');
        
        mainContainer.classList.remove('chat-hidden');
        chatPanel.classList.remove('hidden');
        
        localStorage.setItem('chatHidden', false);
        
        // Focus on chat input
        const chatInput = document.getElementById('chatInput');
        if (chatInput) {
            setTimeout(() => chatInput.focus(), 100);
        }
    },
    
    /**
     * Handle window resize
     */
    handleResize() {
        const width = window.innerWidth;
        
        // Auto-collapse sidebar on mobile
        if (width < 640 && !this.state.sidebarCollapsed) {
            // Mobile view detected
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('mobileOverlay');
            
            if (this.state.mobileMenuOpen) {
                sidebar.classList.add('open');
                overlay.style.display = 'block';
            }
        }
    },
    
    /**
     * Handle keyboard shortcuts
     */
    handleKeyboard(e) {
        // Ctrl/Cmd + K for search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchTrigger = document.getElementById('searchTrigger');
            if (searchTrigger) {
                searchTrigger.click();
            }
        }
        
        // Escape key
        if (e.key === 'Escape') {
            // Close search modal if open
            const searchModal = document.getElementById('searchModal');
            if (searchModal && searchModal.style.display !== 'none') {
                searchModal.style.display = 'none';
                this.state.searchModalOpen = false;
            }
            
            // Close mobile menu if open
            if (this.state.mobileMenuOpen) {
                this.closeMobileMenu();
            }
        }
    },
    
    /**
     * Close mobile menu
     */
    closeMobileMenu() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('mobileOverlay');
        
        if (sidebar) sidebar.classList.remove('open');
        if (overlay) overlay.style.display = 'none';
        
        this.state.mobileMenuOpen = false;
    },
    
    /**
     * Show notification
     */
    showNotification(message, type = 'info') {
        console.log(`[${type.toUpperCase()}] ${message}`);
        // TODO: Implement toast notification system
    }
};

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => App.init());
} else {
    App.init();
}

// Export App for use in other modules
window.App = App;
