/**
 * Product data for eTrade e-commerce website
 * Contains an array of product objects with details needed for display
 */

const products = [
  {
    id: 1,
    name: "Bose QuietComfort 45 Wireless Bluetooth Headphones",
    originalPrice: 600,
    discountedPrice: 400,
    discountPercentage: 33,
    image: "/api/placeholder/300/300", // Placeholder image
    category: "Headphones",
    gender: "Unisex",
    color: "black",
    size: "M",
    featured: true
  },
  {
    id: 2,
    name: "PS5 DualSense Wireless Controller",
    originalPrice: 59.99,
    discountedPrice: 29.99,
    discountPercentage: 50,
    image: "/api/placeholder/300/300", // Placeholder image
    category: "Gaming Accessories",
    gender: "Unisex",
    color: "white",
    size: "M",
    featured: true
  },
  {
    id: 3,
    name: "Logitech MX Keys and MX Master 3 Combo Pack",
    originalPrice: 199.99,
    discountedPrice: 149.99,
    discountPercentage: 25,
    image: "/api/placeholder/300/300", // Placeholder image
    category: "Keyboards & Mice",
    gender: "Unisex",
    color: "black",
    size: "M",
    featured: false
  },
  {
    id: 4,
    name: "Logitech C920e HD Webcam with Dual Microphones",
    originalPrice: 89.99,
    discountedPrice: 69.99,
    discountPercentage: 22,
    image: "/api/placeholder/300/300", // Placeholder image
    category: "Webcams",
    gender: "Unisex",
    color: "black",
    size: "S",
    featured: false
  },
  {
    id: 5,
    name: "JBL Charge 5 Portable Waterproof Speaker",
    originalPrice: 179.99,
    discountedPrice: 129.99,
    discountPercentage: 28,
    image: "/api/placeholder/300/300", // Placeholder image
    category: "Speakers",
    gender: "Unisex",
    color: "blue",
    size: "M",
    featured: true
  },
  {
    id: 6,
    name: "Amazon Echo Dot (4th Gen) Smart Speaker with Alexa",
    originalPrice: 49.99,
    discountedPrice: 29.99,
    discountPercentage: 40,
    image: "/api/placeholder/300/300", // Placeholder image
    category: "Smart Speakers",
    gender: "Unisex",
    color: "white",
    size: "S",
    featured: true
  },
  {
    id: 7,
    name: "Sony WH-1000XM4 Noise Cancelling Headphones",
    originalPrice: 349.99,
    discountedPrice: 278.99,
    discountPercentage: 20,
    image: "/api/placeholder/300/300", // Placeholder image
    category: "Headphones",
    gender: "Unisex",
    color: "black",
    size: "M",
    featured: true
  },
  {
    id: 8,
    name: "Xbox Elite Wireless Controller Series 2",
    originalPrice: 179.99,
    discountedPrice: 139.99,
    discountPercentage: 22,
    image: "/api/placeholder/300/300", // Placeholder image
    category: "Gaming Accessories",
    gender: "Unisex",
    color: "black",
    size: "L",
    featured: false
  },
  {
    id: 9,
    name: "Razer BlackWidow V3 Pro Mechanical Gaming Keyboard",
    originalPrice: 229.99,
    discountedPrice: 179.99,
    discountPercentage: 22,
    image: "/api/placeholder/300/300", // Placeholder image
    category: "Keyboards & Mice",
    gender: "Unisex",
    color: "green",
    size: "L",
    featured: false
  },
  {
    id: 10,
    name: "Logitech StreamCam Premium Webcam for Streaming",
    originalPrice: 169.99,
    discountedPrice: 129.99,
    discountPercentage: 24,
    image: "/api/placeholder/300/300", // Placeholder image
    category: "Webcams",
    gender: "Unisex",
    color: "white",
    size: "S",
    featured: true
  },
  {
    id: 11,
    name: "Bose SoundLink Revolve+ II Portable Bluetooth Speaker",
    originalPrice: 329.99,
    discountedPrice: 279.99,
    discountPercentage: 15,
    image: "/api/placeholder/300/300", // Placeholder image
    category: "Speakers",
    gender: "Unisex",
    color: "black",
    size: "M",
    featured: false
  },
  {
    id: 12,
    name: "Google Nest Audio Smart Speaker",
    originalPrice: 99.99,
    discountedPrice: 79.99,
    discountPercentage: 20,
    image: "/api/placeholder/300/300", // Placeholder image
    category: "Smart Speakers",
    gender: "Unisex",
    color: "blue",
    size: "M",
    featured: false
  }
];

// Categories list for filter
const categories = ["Headphones", "Gaming Accessories", "Keyboards & Mice", "Webcams", "Speakers", "Smart Speakers"];

// Gender options for filter
const genders = ["Men", "Women", "Unisex"];

// Color options for filter
const colors = [
  { name: "black", code: "#000000" },
  { name: "white", code: "#ffffff" },
  { name: "blue", code: "#0d6efd" },
  { name: "yellow", code: "#ffc107" },
  { name: "green", code: "#198754" },
  { name: "red", code: "#dc3545" }
];

// Size options for filter
const sizes = ["S", "M", "L", "XL"];
