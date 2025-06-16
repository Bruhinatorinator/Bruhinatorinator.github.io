document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons and project cards
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter projects
            filterProjects(filterValue);
        });
    });

    function filterProjects(filterValue) {
        projectCards.forEach(card => {
            const cardCategories = card.getAttribute('data-category');
            
            if (filterValue === 'all') {
                // Show all projects
                showCard(card);
            } else {
                // Check if card category includes the filter value
                if (cardCategories && cardCategories.includes(filterValue)) {
                    showCard(card);
                } else {
                    hideCard(card);
                }
            }
        });
    }

    function showCard(card) {
        card.style.display = 'block';
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        // Animate in
        setTimeout(() => {
            card.style.transition = 'all 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 50);
    }

    function hideCard(card) {
        card.style.transition = 'all 0.3s ease';
        card.style.opacity = '0';
        card.style.transform = 'translateY(-20px)';
        
        // Hide after animation
        setTimeout(() => {
            card.style.display = 'none';
        }, 300);
    }

    // Initialize - show all projects by default
    filterProjects('all');
});