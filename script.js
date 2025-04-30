// Fungsi yang dijalankan ketika dokumen sudah siap
document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi tampilan awal
    initHomePage();
    
    // Setup navigasi
    setupNavigation();
    
    // Update badge keranjang
    updateCartBadge();
});

// Fungsi untuk menginisialisasi halaman utama
function initHomePage() {
    // Tampilkan produk terbaru
    displayNewestProducts();
    
    // Tampilkan kategori
    displayCategories();
    
    // Tampilkan produk populer
    displayPopularProducts();
}

// Fungsi untuk menampilkan produk terbaru
function displayNewestProducts() {
    const container = document.getElementById('newest-shoes-container');
    const newProducts = getNewProducts();
    
    container.innerHTML = '';
    
    newProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.onclick = function() {
            showProductDetail(product.id);
        };
        
        productCard.innerHTML = `
            <div class="product-img" style="background-image: url('${product.image}')"></div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <div class="product-name">${product.name}</div>
            </div>
        `;
        
        container.appendChild(productCard);
    });
}

// Fungsi untuk menampilkan kategori
function displayCategories() {
    const container = document.getElementById('categories-container');
    
    container.innerHTML = '';
    
    categories.forEach(category => {
        const categoryItem = document.createElement('div');
        categoryItem.className = 'category-item';
        
        categoryItem.innerHTML = `
            <div class="category-icon">
                <i class="bi ${category.icon}"></i>
            </div>
            <div class="category-name">${category.name}</div>
        `;
        
        container.appendChild(categoryItem);
    });
}

// Fungsi untuk menampilkan produk populer
function displayPopularProducts() {
    const container = document.getElementById('popular-shoes-container');
    const popularProducts = getPopularProducts();
    
    container.innerHTML = '';
    
    popularProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-list-item';
        productItem.onclick = function() {
            showProductDetail(product.id);
        };
        
        productItem.innerHTML = `
            <div class="list-item-img" style="background-image: url('${product.image}')"></div>
            <div class="list-item-info">
                <div class="product-brand">${product.brand}</div>
                <div class="product-name">${product.name}</div>
            </div>
            <div class="list-item-price">$${product.price.toFixed(2)}</div>
        `;
        
        container.appendChild(productItem);
    });
}

// Fungsi untuk menampilkan detail produk
function showProductDetail(productId) {
    const product = getProductById(productId);
    const container = document.getElementById('product-detail-content');
    
    container.innerHTML = `
        <div class="product-detail-img" style="background-image: url('${product.image}')"></div>
        <div class="product-detail-info">
            <div class="product-detail-brand">${product.brand}</div>
            <div class="product-detail-name">${product.name}</div>
            <div class="product-detail-rating">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-half"></i>
                <span>(4.5)</span>
            </div>
            <div class="product-detail-price">$${product.price.toFixed(2)}</div>
        </div>
        
        <div class="product-options">
            <div class="option-label">Size</div>
            <div class="size-options" id="size-options">
                ${product.sizes.map(size => `<div class="size-option" data-size="${size}">${size}</div>`).join('')}
            </div>
            
            <div class="option-label">Color</div>
            <div class="color-options" id="color-options">
                ${product.colors.map(color => `<div class="color-option" style="background-color: ${color}" data-color="${color}"></div>`).join('')}
            </div>
        </div>
        
        <div class="product-description">
            ${product.description}
        </div>
        
        <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
            Add to Cart
        </button>
        
        <div class="similar-products">
            <h3>You might also like</h3>
            <div class="products-row">
                ${getSimilarProducts(product.id).map(p => `
                    <div class="product-card" onclick="showProductDetail(${p.id})">
                        <div class="product-img" style="background-image: url('${p.image}')"></div>
                        <div class="product-info">
                            <div class="product-brand">${p.brand}</div>
                            <div class="product-name">${p.name}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Setup event listener untuk opsi ukuran
    setupSizeOptions();
    
    // Setup event listener untuk opsi warna
    setupColorOptions();
    
    // Tampilkan halaman detail produk
    switchPage('product-detail-page');
}

// Fungsi untuk setup opsi ukuran
function setupSizeOptions() {
    const sizeOptions = document.querySelectorAll('#size-options .size-option');
    
    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Hapus kelas selected dari semua opsi
            sizeOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Tambahkan kelas selected ke opsi yang dipilih
            this.classList.add('selected');
        });
    });
}

// Fungsi untuk setup opsi warna
function setupColorOptions() {
    const colorOptions = document.querySelectorAll('#color-options .color-option');
    
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Hapus kelas selected dari semua opsi
            colorOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Tambahkan kelas selected ke opsi yang dipilih
            this.classList.add('selected');
        });
    });
}

// Fungsi untuk menambahkan produk ke keranjang
function addToCart(productId) {
    const product = getProductById(productId);
    
    // Cek apakah produk sudah ada di keranjang
    const existingItem = cartItems.find(item => item.product.id === productId);
    
    if (existingItem) {
        // Jika sudah ada, tambahkan jumlahnya
        existingItem.quantity += 1;
    } else {
        // Jika belum ada, tambahkan sebagai item baru
        cartItems.push({
            id: Date.now(),
            product: product,
            quantity: 1,
            selectedSize: document.querySelector('#size-options .size-option.selected')?.dataset.size || product.sizes[0],
            selectedColor: document.querySelector('#color-options .color-option.selected')?.dataset.color || product.colors[0]
        });
    }
    
    // Update badge keranjang
    updateCartBadge();
    
    // Tampilkan notifikasi
    alert(`${product.name} has been added to your cart!`);
}

// Fungsi untuk update badge keranjang
function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    
    badge.textContent = totalItems;
}

// Fungsi untuk menampilkan isi keranjang
function displayCartItems() {
    const emptyCart = document.getElementById('empty-cart');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartSummary = document.getElementById('cart-summary');
    
    // Jika keranjang kosong
    if (cartItems.length === 0) {
        emptyCart.style.display = 'flex';
        cartItemsContainer.style.display = 'none';
        cartSummary.style.display = 'none';
        return;
    }
    
    // Jika keranjang tidak kosong
    emptyCart.style.display = 'none';
    cartItemsContainer.style.display = 'block';
    cartSummary.style.display = 'block';
    
    // Kosongkan container
    cartItemsContainer.innerHTML = '';
    
    // Tambahkan setiap item ke container
    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        cartItem.innerHTML = `
            <div class="cart-item-img" style="background-image: url('${item.product.image}')"></div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.product.brand} ${item.product.name}</div>
                <div class="cart-item-price">$${item.product.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="decreaseQuantity(${item.id})">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="increaseQuantity(${item.id})">+</button>
                </div>
            </div>
            <div>
                <div class="cart-item-total">$${(item.product.price * item.quantity).toFixed(2)}</div>
                <div class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</div>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Update summary
    updateCartSummary();
}

// Fungsi untuk menambah jumlah item di keranjang
function increaseQuantity(itemId) {
    const item = cartItems.find(item => item.id === itemId);
    
    if (item) {
        item.quantity += 1;
        displayCartItems();
        updateCartBadge();
    }
}

// Fungsi untuk mengurangi jumlah item di keranjang
function decreaseQuantity(itemId) {
    const item = cartItems.find(item => item.id === itemId);
    
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            removeFromCart(itemId);
            return;
        }
        
        displayCartItems();
        updateCartBadge();
    }
}

// Fungsi untuk menghapus item dari keranjang
function removeFromCart(itemId) {
    cartItems = cartItems.filter(item => item.id !== itemId);
    displayCartItems();
    updateCartBadge();
}

// Fungsi untuk update summary keranjang
function updateCartSummary() {
    const subtotalElement = document.getElementById('subtotal-price');
    const totalElement = document.getElementById('total-price');
    
    // Hitung subtotal
    const subtotal = cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    
    // Hitung total (subtotal + shipping)
    const shipping = 10.00;
    const total = subtotal + shipping;
    
    // Update tampilan
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;
    
    // Update juga di halaman checkout
    document.getElementById('checkout-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('checkout-total').textContent = `$${total.toFixed(2)}`;
    
    // Display checkout items
    displayCheckoutItems();
}

// Fungsi untuk menampilkan item di halaman checkout
function displayCheckoutItems() {
    const container = document.getElementById('checkout-items-summary');
    
    container.innerHTML = '';
    
    cartItems.forEach(item => {
        const checkoutItem = document.createElement('div');
        checkoutItem.className = 'checkout-item';
        
        checkoutItem.innerHTML = `
            <div class="checkout-item-info">
                <div class="checkout-item-img" style="background-image: url('${item.product.image}')"></div>
                <div>
                    <div class="checkout-item-name">${item.product.brand} ${item.product.name}</div>
                    <div class="checkout-item-quantity">Qty: ${item.quantity}</div>
                </div>
            </div>
            <div class="checkout-item-price">$${(item.product.price * item.quantity).toFixed(2)}</div>
        `;
        
        container.appendChild(checkoutItem);
    });
}

// Fungsi untuk proses pemesanan
function placeOrder() {
    // Validasi jika keranjang kosong
    if (cartItems.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Buat nomor pesanan acak
    const orderNumber = Math.floor(100000 + Math.random() * 900000);
    document.getElementById('order-number').textContent = orderNumber;
    
    // Buat perkiraan tanggal pengiriman (5-8 hari dari sekarang)
    const today = new Date();
    const deliveryStart = new Date(today);
    deliveryStart.setDate(today.getDate() + 5);
    const deliveryEnd = new Date(today);
    deliveryEnd.setDate(today.getDate() + 8);
    
    // Format tanggal
    const options = { month: 'long', day: 'numeric' };
    const deliveryDateText = `${deliveryStart.toLocaleDateString('en-US', options)} - ${deliveryEnd.toLocaleDateString('en-US', options)}, ${deliveryEnd.getFullYear()}`;
    document.getElementById('delivery-date').textContent = deliveryDateText;
    
    // Simpan order dalam riwayat (bisa digunakan untuk fitur selanjutnya)
    const order = {
        id: orderNumber,
        date: new Date(),
        items: [...cartItems],
        total: parseFloat(document.getElementById('checkout-total').textContent.replace('$', '')),
        status: 'Processing'
    };
    orders.push(order);
    
    // Kosongkan keranjang
    cartItems = [];
    updateCartBadge();
    
    // Tampilkan halaman sukses
    switchPage('order-success-page');
}

// Fungsi untuk kembali ke halaman utama setelah order
function continueShoppingAfterOrder() {
    switchPage('home-page');
}

// Fungsi untuk setup navigasi
function setupNavigation() {
    const navItems = document.querySelectorAll('.bottom-nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetPage = this.getAttribute('data-page');
            
            // Jika menuju halaman keranjang, tampilkan isi keranjang
            if (targetPage === 'cart-page') {
                displayCartItems();
            }
            
            switchPage(targetPage);
            
            // Tandai navigasi yang aktif
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Fungsi untuk mengganti halaman yang aktif
function switchPage(pageId) {
    const pages = document.querySelectorAll('.page');
    
    pages.forEach(page => {
        page.classList.remove('active-page');
    });
    
    document.getElementById(pageId).classList.add('active-page');
    
    // Jika beralih ke halaman utama, update navigasi
    if (pageId === 'home-page') {
        const navItems = document.querySelectorAll('.bottom-nav-item');
        navItems.forEach(nav => nav.classList.remove('active'));
        document.querySelector('.bottom-nav-item[data-page="home-page"]').classList.add('active');
    }
}

// Fungsi untuk navigasi kembali
function goBack() {
    const activePageId = document.querySelector('.active-page').id;
    
    if (activePageId === 'product-detail-page') {
        switchPage('home-page');
    } else if (activePageId === 'checkout-page') {
        switchPage('cart-page');
    }
}
