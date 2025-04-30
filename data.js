// Data untuk produk sepatu
const products = [
    {
        id: 1,
        brand: "Nike",
        name: "Air Presto",
        price: 192.00,
        image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600",
        sizes: ["US 7", "US 8", "US 9", "US 10"],
        colors: ["#000000", "#ffffff", "#3498db"],
        description: "Nike Air Presto, sepatu ikonik dengan desain yang nyaman dan ringan. Dilengkapi dengan teknologi Air-Sole yang membuatnya cocok untuk penggunaan sehari-hari maupun olahraga.",
        category: "Sneakers",
        isPopular: true,
        isNew: true
    },
    {
        id: 2,
        brand: "Adidas",
        name: "Ultraboost 21",
        price: 189.99,
        image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
        sizes: ["US 6", "US 7", "US 8.5", "US 9.5", "US 10"],
        colors: ["#ff0000", "#f1c40f", "#2ecc71"],
        description: "Adidas Ultraboost 21 dirancang untuk kenyamanan maksimal saat berlari. Teknologi BOOST memberikan energi kembali pada setiap langkah, sementara sol Continental™ memberikan traksi dalam segala kondisi cuaca.",
        category: "Running",
        isPopular: true,
        isNew: true
    },
    {
        id: 3,
        brand: "Puma",
        name: "RS-X Toys",
        price: 120.00,
        image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=600",
        sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
        colors: ["#9b59b6", "#1abc9c", "#e74c3c"],
        description: "Puma RS-X Toys menggabungkan gaya retro dengan teknologi modern. Desain tebal dan berani dengan kombinasi warna yang menarik membuatnya menjadi sepatu fashion yang menonjol.",
        category: "Sneakers",
        isPopular: false,
        isNew: true
    },
    {
        id: 4,
        brand: "New Balance",
        name: "Fresh Foam 1080v11",
        price: 159.95,
        image: "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=600",
        sizes: ["US 8", "US 9", "US 10", "US 11", "US 12"],
        colors: ["#34495e", "#7f8c8d", "#bdc3c7"],
        description: "New Balance Fresh Foam 1080v11 memberikan kenyamanan premium dengan teknologi Fresh Foam X yang semakin ditingkatkan. Sepatu lari ini dirancang untuk penggunaan jarak jauh dengan dukungan yang luar biasa.",
        category: "Running",
        isPopular: true,
        isNew: false
    },
    {
        id: 5,
        brand: "Converse",
        name: "Chuck Taylor All Star",
        price: 60.00,
        image: "https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg?auto=compress&cs=tinysrgb&w=600",
        sizes: ["US 6", "US 7", "US 8", "US 9", "US 10"],
        colors: ["#000000", "#ffffff", "#e74c3c"],
        description: "Sepatu ikonik yang tak lekang oleh waktu. Converse Chuck Taylor All Star merupakan sepatu kanvas klasik yang telah menjadi simbol fashion selama beberapa dekade.",
        category: "Casual",
        isPopular: true,
        isNew: false
    },
    {
        id: 6,
        brand: "Under Armour",
        name: "HOVR Phantom 2",
        price: 150.00,
        image: "https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&w=600",
        sizes: ["US 8", "US 9", "US 10", "US 11"],
        colors: ["#3498db", "#2c3e50", "#27ae60"],
        description: "Under Armour HOVR Phantom 2 menghadirkan kenyamanan ekstrim dan konektivitas digital. Teknologi HOVR memberikan rasa ringan dan responsif, sementara chip UA dapat terhubung dengan aplikasi untuk melacak data lari Anda.",
        category: "Running",
        isPopular: false,
        isNew: true
    },
    {
        id: 7,
        brand: "Vans",
        name: "Old Skool",
        price: 75.00,
        image: "https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg?auto=compress&cs=tinysrgb&w=600",
        sizes: ["US 6", "US 7", "US 8", "US 9", "US 10"],
        colors: ["#000000", "#ffffff", "#f1c40f"],
        description: "Vans Old Skool adalah sepatu skate klasik dengan strip samping yang ikonik. Dibuat dengan bahan tahan lama dan sol karet wafel untuk traksi optimal.",
        category: "Casual",
        isPopular: true,
        isNew: false
    },
    {
        id: 8,
        brand: "Reebok",
        name: "Classic Leather",
        price: 80.00,
        image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600",
        sizes: ["US 7", "US 8", "US 9", "US 10"],
        colors: ["#ffffff", "#000000", "#c0392b"],
        description: "Reebok Classic Leather memadukan gaya retro dengan kenyamanan modern. Desain yang bersih dan sederhana membuatnya cocok untuk berbagai kesempatan dan gaya pakaian.",
        category: "Sneakers",
        isPopular: false,
        isNew: false
    }
];

// Data untuk kategori sepatu
const categories = [
    { id: 1, name: "Sneakers", icon: "bi-circle-fill" },
    { id: 2, name: "Running", icon: "bi-lightning-fill" },
    { id: 3, name: "Casual", icon: "bi-diamond-fill" },
    { id: 4, name: "Basketball", icon: "bi-dribbble" },
    { id: 5, name: "Training", icon: "bi-trophy-fill" }
];

// (Simulasi) Data keranjang belanja
let cartItems = [];

// (Simulasi) Data riwayat pesanan
let orders = [];

// Fungsi untuk mendapatkan produk berdasarkan ID
function getProductById(productId) {
    return products.find(product => product.id === productId);
}

// Fungsi untuk mendapatkan produk baru
function getNewProducts() {
    return products.filter(product => product.isNew);
}

// Fungsi untuk mendapatkan produk populer
function getPopularProducts() {
    return products.filter(product => product.isPopular);
}

// Fungsi untuk mendapatkan produk berdasarkan kategori
function getProductsByCategory(categoryName) {
    return products.filter(product => product.category === categoryName);
}

// Fungsi untuk mendapatkan produk serupa
function getSimilarProducts(productId) {
    const product = getProductById(productId);
    if (!product) return [];
    
    // Dapatkan produk dengan kategori yang sama (kecuali produk saat ini)
    return products.filter(p => p.category === product.category && p.id !== productId).slice(0, 4);
}
