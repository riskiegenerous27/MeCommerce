// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Toggle filter sections
    const filterHeaders = document.querySelectorAll('.filter-header');
    
    filterHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const filterBody = this.nextElementSibling;
            const toggleIcon = this.querySelector('.toggle-icon i');
            
            if (filterBody.style.display === 'none') {
                filterBody.style.display = 'block';
                toggleIcon.classList.remove('fa-plus');
                toggleIcon.classList.add('fa-minus');
            } else {
                filterBody.style.display = 'none';
                toggleIcon.classList.remove('fa-minus');
                toggleIcon.classList.add('fa-plus');
            }
        });
    });
    
    // Color selector functionality
    const colorCircles = document.querySelectorAll('.color-circle');
    
    colorCircles.forEach(circle => {
        circle.addEventListener('click', function() {
            // Remove active class from siblings in the same selector
            const parentSelector = this.closest('.color-selector');
            parentSelector.querySelectorAll('.color-circle').forEach(sibling => {
                sibling.classList.remove('active');
            });
            
            // Add active class to clicked circle
            this.classList.add('active');
        });
    });
    
    // Size selector functionality
    const sizeBoxes = document.querySelectorAll('.size-box');
    
    sizeBoxes.forEach(box => {
        box.addEventListener('click', function() {
            // Toggle active class on clicked box
            this.classList.toggle('active');
        });
    });
    
    // Price selector functionality
    const priceBoxes = document.querySelectorAll('.price-box');
    
    priceBoxes.forEach(box => {
        box.addEventListener('click', function() {
            // Toggle active class on clicked box
            this.classList.toggle('active');
        });
    });
    
    // Product color dots functionality
    const productColorDots = document.querySelectorAll('.product-card .color-dot');
    
    productColorDots.forEach(dot => {
        dot.addEventListener('click', function(e) {
            // Prevent bubbling to parent elements
            e.stopPropagation();
            
            // Remove active class from siblings
            const colorOptions = this.closest('.color-options');
            colorOptions.querySelectorAll('.color-dot').forEach(sibling => {
                sibling.classList.remove('active');
            });
            
            // Add active class to clicked dot
            this.classList.add('active');
        });
    });
    
    // Reset filter button
    const resetBtn = document.querySelector('.reset-btn');
    
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            // Reset category radio buttons
            document.querySelectorAll('input[type="radio"]').forEach(radio => {
                radio.checked = false;
            });
            
            // Reset color circles
            document.querySelectorAll('.color-circle').forEach(circle => {
                circle.classList.remove('active');
            });
            
            // Reset size boxes
            document.querySelectorAll('.size-box').forEach(box => {
                box.classList.remove('active');
            });
            
            // Reset price boxes
            document.querySelectorAll('.price-box').forEach(box => {
                box.classList.remove('active');
            });
        });
    }
    
    // Load more button
    const loadMoreBtn = document.querySelector('.load-more-btn');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // In a real implementation, this would load more products via AJAX
            alert('This would load more products in a real implementation');
        });
    }
    
    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value.trim() === '') {
                alert('Please enter your email address');
                return;
            }
            
            // In a real implementation, this would send the subscription request
            alert(`Thank you for subscribing with ${emailInput.value}!`);
            emailInput.value = '';
        });
    }
    
    // Product cards hover effect
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.05)';
        });
    });
    
    // Mobile menu toggle (for responsive design)
    const createMobileMenu = () => {
        // Create mobile menu button if it doesn't exist
        if (!document.querySelector('.mobile-menu-btn')) {
            const header = document.querySelector('.header .container');
            const mobileBtn = document.createElement('div');
            mobileBtn.className = 'mobile-menu-btn';
            mobileBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            
            // Insert before header-right
            header.insertBefore(mobileBtn, document.querySelector('.header-right'));
            
            // Add event listener
            mobileBtn.addEventListener('click', function() {
                const mainNav = document.querySelector('.main-nav');
                mainNav.classList.toggle('show');
            });
            
            // Add responsive styles
            const style = document.createElement('style');
            style.innerHTML = `
                @media (max-width: 768px) {
                    .mobile-menu-btn {
                        display: block;
                        font-size: 24px;
                        cursor: pointer;
                    }
                    .main-nav {
                        display: none;
                        width: 100%;
                        order: 3;
                    }
                    .main-nav.show {
                        display: block;
                    }
                    .main-nav ul {
                        flex-direction: column;
                        padding: 15px 0;
                    }
                    .main-nav li {
                        margin: 8px 0;
                    }
                }
                @media (min-width: 769px) {
                    .mobile-menu-btn {
                        display: none;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    };
    
    // Check window width for mobile menu
    if (window.innerWidth <= 768) {
        createMobileMenu();
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            createMobileMenu();
        }
    });
});