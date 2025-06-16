async function loadNavbar() {
    try {
        const response = await fetch('/composables/navbar.html');
        const navbarHTML = await response.text();
        
        // Find the navbar placeholder or insert at beginning of body
        const navbarContainer = document.getElementById('navbar-container');
        if (navbarContainer) {
            navbarContainer.innerHTML = navbarHTML;
        } else {
            // If no container, insert at the beginning of body
            document.body.insertAdjacentHTML('afterbegin', navbarHTML);
        }
        
        // Initialize mobile menu functionality after navbar is loaded
        initializeMobileMenu();
        
        // Highlight current page
        highlightCurrentPage();
        
    } catch (error) {
        console.error('Error loading navbar:', error);
        // Fallback: show a simple message
        console.log('Could not load navbar. Make sure the path to composables/navbar.html is correct.');
    }
}

// Initialize mobile menu functionality
function initializeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-menu');
    
    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navList.classList.toggle('active');
        });
    }
}

// Highlight current page in navigation
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.style.color = '#ffdd59';
            link.style.fontWeight = 'bold';
        }
    });
}

// Load navbar when DOM is ready
document.addEventListener('DOMContentLoaded', loadNavbar);

