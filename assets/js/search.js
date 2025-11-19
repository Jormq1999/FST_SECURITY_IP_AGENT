/**
 * Team Information Portal - Search Module
 * ==========================================================================
 * Note: Advanced search with Lunr.js will be implemented in Week 8
 */

const Search = {
    /**
     * Initialize search
     */
    init() {
        this.setupSearchTrigger();
        this.setupSearchModal();
        this.setupSearchInput();
    },
    
    /**
     * Set up search trigger button
     */
    setupSearchTrigger() {
        const searchTrigger = document.getElementById('searchTrigger');
        if (searchTrigger) {
            searchTrigger.addEventListener('click', () => this.openSearchModal());
        }
    },
    
    /**
     * Set up search modal
     */
    setupSearchModal() {
        const searchModal = document.getElementById('searchModal');
        const searchModalBackdrop = document.getElementById('searchModalBackdrop');
        
        if (searchModalBackdrop) {
            searchModalBackdrop.addEventListener('click', () => this.closeSearchModal());
        }
        
        // Keyboard shortcut (Ctrl+K is handled in app.js)
    },
    
    /**
     * Set up search input
     */
    setupSearchInput() {
        const searchInput = document.getElementById('searchInput');
        const searchClear = document.getElementById('searchClear');
        
        if (searchInput) {
            // Handle input changes
            searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
                
                // Show/hide clear button
                if (searchClear) {
                    searchClear.style.display = e.target.value ? 'block' : 'none';
                }
            });
            
            // Handle Enter key
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.performSearch(e.target.value);
                }
                
                // Close on Escape
                if (e.key === 'Escape') {
                    this.closeSearchModal();
                }
            });
        }
        
        if (searchClear) {
            searchClear.addEventListener('click', () => {
                if (searchInput) {
                    searchInput.value = '';
                    searchInput.focus();
                }
                this.clearSearchResults();
                searchClear.style.display = 'none';
            });
        }
    },
    
    /**
     * Open search modal
     */
    openSearchModal() {
        const searchModal = document.getElementById('searchModal');
        const searchInput = document.getElementById('searchInput');
        
        if (searchModal) {
            searchModal.style.display = 'block';
            
            if (window.App) {
                window.App.state.searchModalOpen = true;
            }
            
            // Focus on input
            if (searchInput) {
                setTimeout(() => searchInput.focus(), 100);
            }
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        }
    },
    
    /**
     * Close search modal
     */
    closeSearchModal() {
        const searchModal = document.getElementById('searchModal');
        const searchInput = document.getElementById('searchInput');
        
        if (searchModal) {
            searchModal.style.display = 'none';
            
            if (window.App) {
                window.App.state.searchModalOpen = false;
            }
            
            // Clear search
            if (searchInput) {
                searchInput.value = '';
            }
            this.clearSearchResults();
            
            // Restore body scroll
            document.body.style.overflow = '';
        }
    },
    
    /**
     * Handle search input (debounced)
     */
    handleSearch(query) {
        // Clear existing timeout
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        
        // Debounce search
        this.searchTimeout = setTimeout(() => {
            if (query.trim().length > 2) {
                this.performSearch(query);
            } else {
                this.showSearchHint();
            }
        }, 300);
    },
    
    /**
     * Perform search (placeholder - will be enhanced in Week 8)
     */
    performSearch(query) {
        const searchResults = document.getElementById('searchResults');
        if (!searchResults) return;
        
        console.log('🔍 Searching for:', query);
        
        // Placeholder results (will be replaced with Lunr.js in Week 8)
        const placeholderResults = [
            {
                title: 'CSME Architecture Overview',
                excerpt: '...Engine architecture, including component hierarchy and integration patterns...',
                section: 'Architecture',
                url: '#csme'
            },
            {
                title: 'Design System Guidelines',
                excerpt: '...comprehensive design system with colors, typography, and components...',
                section: 'Designers',
                url: '#designers'
            },
            {
                title: 'Testing Procedures',
                excerpt: '...validation framework and quality gates for ensuring code quality...',
                section: 'Validators',
                url: '#validators'
            }
        ];
        
        // Filter based on query (basic placeholder)
        const filtered = placeholderResults.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.excerpt.toLowerCase().includes(query.toLowerCase())
        );
        
        this.displayResults(filtered, query);
    },
    
    /**
     * Display search results
     */
    displayResults(results, query) {
        const searchResults = document.getElementById('searchResults');
        if (!searchResults) return;
        
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="search-no-results">
                    <p>No results found for "<strong>${this.escapeHtml(query)}</strong>"</p>
                    <p class="search-hint">Try different keywords or ask our AI assistant</p>
                </div>
            `;
            return;
        }
        
        let html = `<div class="search-results-header">
            <p>${results.length} result${results.length !== 1 ? 's' : ''} found</p>
        </div>`;
        
        results.forEach(result => {
            html += `
                <a href="${result.url}" class="search-result-item">
                    <div class="search-result-header">
                        <span class="search-result-icon">📄</span>
                        <span class="search-result-title">${this.highlightQuery(result.title, query)}</span>
                    </div>
                    <p class="search-result-excerpt">${this.highlightQuery(result.excerpt, query)}</p>
                    <span class="search-result-section">${result.section}</span>
                </a>
            `;
        });
        
        html += `
            <div class="search-footer">
                <p class="search-hint">💡 <strong>Coming in Week 8:</strong> Advanced search with filters and suggestions</p>
            </div>
        `;
        
        searchResults.innerHTML = html;
    },
    
    /**
     * Show search hint
     */
    showSearchHint() {
        const searchResults = document.getElementById('searchResults');
        if (searchResults) {
            searchResults.innerHTML = '<p class="search-hint">Type to search across all sections...</p>';
        }
    },
    
    /**
     * Clear search results
     */
    clearSearchResults() {
        this.showSearchHint();
    },
    
    /**
     * Highlight query in text
     */
    highlightQuery(text, query) {
        if (!query) return text;
        
        const regex = new RegExp(`(${this.escapeRegex(query)})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    },
    
    /**
     * Escape HTML
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },
    
    /**
     * Escape regex special characters
     */
    escapeRegex(text) {
        return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
};

// Initialize search when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Search.init());
} else {
    Search.init();
}

// Export for use in other modules
window.Search = Search;
