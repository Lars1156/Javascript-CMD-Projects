// Sample Product Data
const products = [
    { id: 1, name: 'Laptop', price: 800, image: 'https://via.placeholder.com/150', description: 'High-performance laptop' },
    { id: 2, name: 'Smartphone', price: 500, image: 'https://via.placeholder.com/150', description: 'Latest smartphone' },
    { id: 3, name: 'Headphones', price: 100, image: 'https://via.placeholder.com/150', description: 'Noise-cancelling headphones' },
    { id: 4, name: 'Camera', price: 1200, image: 'https://via.placeholder.com/150', description: 'Professional camera' }
];

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to Display Products
function displayProducts(productArray) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear current products

    productArray.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-md-3 mb-4';
        productCard.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><strong>$${product.price}</strong></p>
                    <button class="btn btn-primary btn-block" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

// Function to Filter Products Based on Search
function filterProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchInput) ||
        product.description.toLowerCase().includes(searchInput)
    );
    displayProducts(filteredProducts);
}

// Function to Add Product to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name} has been added to your cart!`);
}

// Function to Update Cart Count
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// Function to Display Cart Items
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear current items

    let totalAmount = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item mb-3';
        cartItem.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h5>${item.name}</h5>
                    <p>$${item.price}</p>
                </div>
                <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);

        totalAmount += item.price;
    });

    document.getElementById('total-amount').textContent = totalAmount;
}

// Function to Remove Item from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
}

// Initialize Product Display on Home Page
if (document.getElementById('product-list')) {
    document.addEventListener('DOMContentLoaded', () => {
        displayProducts(products);
        updateCartCount();
    });
}

// Initialize Cart Display on Cart Page
if (document.getElementById('cart-items')) {
    document.addEventListener('DOMContentLoaded', () => {
        displayCartItems();
        updateCartCount();
    });
}
