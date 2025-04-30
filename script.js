/**
 * Main JavaScript functionality for eTrade e-commerce website
 * Handles product display, cart operations, and filter interactions
 */

// Global variables
let cart = []; // Array to store cart items
let displayedProducts = 8; // Number of products initially displayed
const productsPerLoad = 4; // Number of products to add when "Load More" is clicked

// DOM elements
const productContainer = document.getElementById('product-container');
const cartCountElement = document.getElementById('cart-count');
const loadMoreButton = document.getElementById('load-more');
const colorCircles = document.querySelectorAll('.color-circle');
const sizeButtons = document.querySelectorAll('.size-btn');
const priceRangeSlider = document.getElementById('priceRange');
const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');
const categoryCheckboxes = document.querySelectorAll('[id^="cat-"]');

/**
 * Initialize the page
 */
function init() {
    // Display initial products
    renderProducts();
    
    // Setup event listeners
    setupEventListeners();
}

/**
 * Render products to the product container
 */
function renderProducts() {
    // Clear the product container
    productContainer.innerHTML = '';
    
    // Display products up to the current limit
    for (let i = 0; i < Math.min(displayedProducts, products.length); i++) {
        const product = products[i];
        
        // Create product card element
        const productCard = document.createElement('div');
        productCard.className = 'col-md-4 col-sm-6';
        productCard.innerHTML = `
            <div class="product-card bg-white rounded shadow-sm overflow-hidden">
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="img-fluid product-image">
                    <span class="discount-badge">-${product.discountPercentage}% OFF</span>
                    <div class="product-actions">
                        <button class="cart-btn" data-product-id="${product.id}">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
                <div class="p-3">
                    <h6 class="product-title">${product.name}</h6>
                    <div class="product-price">
                        <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                        <span class="discounted-price">$${product.discountedPrice.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        `;
        
        productContainer.appendChild(productCard);
    }
    
    // Add event listeners to the newly added "Add to Cart" buttons
    document.querySelectorAll('.cart-btn').forEach(button => {
        button.addEventListener('click', addToCart);
    });
    
    // Hide "Load More" button if all products are displayed
    if (displayedProducts >= products.length) {
        loadMoreButton.style.display = 'none';
    } else {
        loadMoreButton.style.display = 'inline-block';
    }
}

/**
 * Set up all event listeners
 */
function setupEventListeners() {
    // Load more products button
    loadMoreButton.addEventListener('click', () => {
        displayedProducts += productsPerLoad;
        renderProducts();
    });
    
    // Color filters
    colorCircles.forEach(circle => {
        circle.addEventListener('click', function() {
            // Toggle active class
            colorCircles.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            
            // Here you would typically implement actual filtering logic
            console.log(`Filter by color: ${this.dataset.color}`);
        });
    });
    
    // Size filters
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle active class
            this.classList.toggle('active');
            
            // Here you would typically implement actual filtering logic
            console.log(`Toggle size filter: ${this.textContent}`);
        });
    });
    
    // Price range slider
    priceRangeSlider.addEventListener('input', function() {
        maxPriceInput.value = this.value;
        
        // Here you would typically implement actual filtering logic
        console.log(`Filter by max price: ${this.value}`);
    });
    
    // Min price input
    minPriceInput.addEventListener('change', function() {
        // Here you would typically implement actual filtering logic
        console.log(`Filter by min price: ${this.value}`);
    });
    
    // Max price input
    maxPriceInput.addEventListener('change', function() {
        priceRangeSlider.value = this.value;
        
        // Here you would typically implement actual filtering logic
        console.log(`Filter by max price: ${this.value}`);
    });
    
    // Category checkboxes
    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Here you would typically implement actual filtering logic
            console.log(`Filter by category: ${this.value}, checked: ${this.checked}`);
        });
    });
}

/**
 * Add a product to the cart
 * @param {Event} e - Click event
 */
function addToCart(e) {
    const productId = parseInt(e.currentTarget.dataset.productId);
    const product = products.find(p => p.id === productId);
    
    if (product) {
        // Check if product already exists in cart
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            // Increment quantity if product already in cart
            existingItem.quantity++;
        } else {
            // Add new item to cart with quantity 1
            cart.push({
                id: product.id,
                name: product.name,
                price: product.discountedPrice,
                image: product.image,
                quantity: 1
            });
        }
        
        // Update cart count
        updateCartCount();
        
        // Show feedback to user (could be enhanced with a toast notification)
        showAddToCartFeedback(product.name);
    }
}

/**
 * Update the cart count in the UI
 */
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = totalItems;
    
    // Save cart to localStorage for persistence
    localStorage.setItem('eTradeCart', JSON.stringify(cart));
}

/**
 * Show feedback when a product is added to cart
 * @param {string} productName - Name of the added product
 */
function showAddToCartFeedback(productName) {
    // Create temporary element for feedback (toast-like notification)
    const feedback = document.createElement('div');
    feedback.className = 'alert alert-success position-fixed bottom-0 end-0 m-3';
    feedback.innerHTML = `
        <i class="fas fa-check-circle me-2"></i>
        Added <strong>${productName}</strong> to cart!
    `;
    
    document.body.appendChild(feedback);
    
    // Remove after 3 seconds
    setTimeout(() => {
        feedback.remove();
    }, 3000);
}

/**
 * Load cart from localStorage on page load
 */
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('eTradeCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Initialize the page when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
    loadCartFromStorage();
});
