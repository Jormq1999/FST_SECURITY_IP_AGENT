/**
 * Team Information Portal - Navigation Module
 * ==========================================================================
 */

const Navigation = {
    /**
     * Initialize navigation
     */
    init() {
        this.setupExpandableMenus();
        this.setupActiveStates();
        this.setupMobileMenu();
    },
    
    /**
     * Set up expandable menu items
     */
    setupExpandableMenus() {
        const expandableLinks = document.querySelectorAll('.nav-link.expandable');
        
        expandableLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleSubmenu(link);
            });
        });
    },
    
    /**
     * Toggle submenu visibility
     */
    toggleSubmenu(link) {
        const isExpanded = link.getAttribute('aria-expanded') === 'true';
        const submenu = link.nextElementSibling;
        
        if (submenu && submenu.classList.contains('nav-submenu')) {
            if (isExpanded) {
                // Collapse
                link.setAttribute('aria-expanded', 'false');
                submenu.style.display = 'none';
            } else {
                // Expand
                link.setAttribute('aria-expanded', 'true');
                submenu.style.display = 'block';
            }
        }
    },
    
    /**
     * Set up active states for navigation links
     */
    setupActiveStates() {
        const navLinks = document.querySelectorAll('.nav-link:not(.expandable), .nav-sublink');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                link.classList.add('active');
                
                // Save to localStorage for persistence
                const href = link.getAttribute('href');
                if (href) {
                    localStorage.setItem('activeNav', href);
                }
                
                // Close mobile menu if open
                if (window.innerWidth < 640) {
                    this.closeMobileMenu();
                }
            });
        });
        
        // Restore active state from localStorage
        const activeNav = localStorage.getItem('activeNav');
        if (activeNav) {
            const activeLink = document.querySelector(`[href="${activeNav}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
                
                // If it's a sublink, expand its parent menu
                if (activeLink.classList.contains('nav-sublink')) {
                    const parentMenu = activeLink.closest('.nav-item');
                    if (parentMenu) {
                        const expandableLink = parentMenu.querySelector('.nav-link.expandable');
                        if (expandableLink) {
                            expandableLink.setAttribute('aria-expanded', 'true');
                            const submenu = expandableLink.nextElementSibling;
                            if (submenu) {
                                submenu.style.display = 'block';
                            }
                        }
                    }
                }
            }
        }
    },
    
    /**
     * Set up mobile menu
     */
    setupMobileMenu() {
        // Create hamburger button for mobile (if not exists)
        if (window.innerWidth < 640) {
            const header = document.querySelector('.header-container');
            
            // Check if hamburger doesn't exist
            if (!document.getElementById('mobileMenuBtn')) {
                const hamburger = document.createElement('button');
                hamburger.id = 'mobileMenuBtn';
                hamburger.className = 'header-btn mobile-menu-btn';
                hamburger.setAttribute('aria-label', 'Toggle menu');
                hamburger.innerHTML = '<span class="icon">☰</span>';
                
                // Insert as first child
                header.insertBefore(hamburger, header.firstChild);
                
                // Add event listener
                hamburger.addEventListener('click', () => this.toggleMobileMenu());
            }
        }
        
        // Set up overlay click to close
        const overlay = document.getElementById('mobileOverlay');
        if (overlay) {
            overlay.addEventListener('click', () => this.closeMobileMenu());
        }
    },
    
    /**
     * Toggle mobile menu
     */
    toggleMobileMenu() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('mobileOverlay');
        
        if (window.App) {
            window.App.state.mobileMenuOpen = !window.App.state.mobileMenuOpen;
            
            if (window.App.state.mobileMenuOpen) {
                sidebar.classList.add('open');
                overlay.style.display = 'block';
                document.body.style.overflow = 'hidden';
            } else {
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
        
        sidebar.classList.remove('open');
        overlay.style.display = 'none';
        document.body.style.overflow = '';
        
        if (window.App) {
            window.App.state.mobileMenuOpen = false;
        }
    },
    
    /**
     * Update breadcrumb
     */
    updateBreadcrumb(path) {
        const breadcrumbList = document.querySelector('.breadcrumb-list');
        if (!breadcrumbList) return;
        
        // Clear current breadcrumb
        breadcrumbList.innerHTML = '';
        
        // Add home
        const homeItem = document.createElement('li');
        homeItem.className = 'breadcrumb-item';
        homeItem.innerHTML = '<a href="/">🏠 Home</a>';
        breadcrumbList.appendChild(homeItem);
        
        // Add path items
        path.forEach((item, index) => {
            // Add separator
            const separator = document.createElement('li');
            separator.className = 'breadcrumb-separator';
            separator.textContent = '›';
            breadcrumbList.appendChild(separator);
            
            // Add item
            const itemElement = document.createElement('li');
            itemElement.className = 'breadcrumb-item';
            
            if (index === path.length - 1) {
                // Last item (current page)
                itemElement.classList.add('active');
                itemElement.setAttribute('aria-current', 'page');
                itemElement.textContent = item.title;
            } else {
                // Intermediate items
                itemElement.innerHTML = `<a href="${item.url}">${item.title}</a>`;
            }
            
            breadcrumbList.appendChild(itemElement);
        });
    }
};

// Initialize navigation when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Navigation.init());
} else {
    Navigation.init();
}

// Export for use in other modules
window.Navigation = Navigation;
