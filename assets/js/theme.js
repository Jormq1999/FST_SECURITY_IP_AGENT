/**
 * Team Information Portal - Theme Module
 * ==========================================================================
 */

const Theme = {
    /**
     * Initialize theme
     */
    init() {
        this.setupThemeToggle();
        this.checkSystemPreference();
    },
    
    /**
     * Set up theme toggle button
     */
    setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    },
    
    /**
     * Toggle theme
     */
    toggleTheme() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        this.setTheme(newTheme);
    },
    
    /**
     * Set theme
     */
    setTheme(theme) {
        console.log(`🎨 Setting theme to: ${theme}`);
        
        // Update DOM
        document.body.setAttribute('data-theme', theme);
        
        // Save to localStorage
        localStorage.setItem('theme', theme);
        
        // Update meta theme-color
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', 
                theme === 'dark' ? '#121212' : '#0066CC'
            );
        }
        
        // Optional: Announce to screen readers
        this.announceThemeChange(theme);
    },
    
    /**
     * Check system color scheme preference
     */
    checkSystemPreference() {
        // Only check if user hasn't set preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return;
        
        // Check for system preference
        if (window.matchMedia) {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
            
            if (prefersDark.matches) {
                this.setTheme('dark');
            }
            
            // Listen for system theme changes
            prefersDark.addEventListener('change', (e) => {
                // Only auto-switch if user hasn't manually set theme recently
                const lastManualChange = localStorage.getItem('themeLastManualChange');
                const now = Date.now();
                
                if (!lastManualChange || now - parseInt(lastManualChange) > 86400000) { // 24 hours
                    this.setTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    },
    
    /**
     * Announce theme change for screen readers
     */
    announceThemeChange(theme) {
        // Create aria-live region if it doesn't exist
        let announcement = document.getElementById('theme-announcement');
        
        if (!announcement) {
            announcement = document.createElement('div');
            announcement.id = 'theme-announcement';
            announcement.className = 'sr-only';
            announcement.setAttribute('aria-live', 'polite');
            announcement.setAttribute('aria-atomic', 'true');
            document.body.appendChild(announcement);
        }
        
        // Announce the change
        announcement.textContent = `Theme changed to ${theme} mode`;
        
        // Clear after announcement
        setTimeout(() => {
            announcement.textContent = '';
        }, 1000);
    },
    
    /**
     * Get current theme
     */
    getCurrentTheme() {
        return document.body.getAttribute('data-theme') || 'light';
    }
};

// Initialize theme when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Theme.init());
} else {
    Theme.init();
}

// Export for use in other modules
window.Theme = Theme;
