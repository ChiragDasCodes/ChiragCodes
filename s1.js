document.addEventListener("DOMContentLoaded", function() {
    const products = [
        {
            id: 1,
            name: "Woodland Leather Office Bag",
            price: 29.99,
            image: "product1.png"
        },
        {
            id: 2,
            name: "SkyBags School Bag",
            price: 39.99,
            image: "product2.png"
        },
        {
            id: 3,
            name: "Zara Ladies Purse",
            price: 49.99,
            image: "product3.png"
        },
        {
            id: 4,
            name: "Casio Analogue Watch",
            price: 59.99,
            image: "product4.png"
        },
        {
            id: 5,
            name: "Trendy Men Shirt Yellow",
            price: 49.99,
            image: "product5.png"
        },
        {
            id: 6,
            name: "Nike Sneakers Grey",
            price: 59.99,
            image: "product6.png"
        }
    ];

    const productGrid = document.querySelector(".product-grid");

    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <a href="#" class="btn add-to-cart" data-id="${product.id}">Add to Cart</a>
        `;

        productGrid.appendChild(productItem);
    });

    let cart = [];
    const cartCountElement = document.querySelector(".cart-count");
    const cartItemsElement = document.querySelector(".cart-items");
    const totalPriceElement = document.querySelector(".total-price");

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const productId = parseInt(this.getAttribute("data-id"));
            const product = products.find(p => p.id === productId);

            const cartItem = cart.find(item => item.id === productId);
            if (cartItem) {
                cartItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            updateCart();
        });
    });

    function updateCart() {
        cartCountElement.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
        cartItemsElement.innerHTML = "";

        cart.forEach(item => {
            const cartItemElement = document.createElement("div");
            cartItemElement.classList.add("cart-item");

            cartItemElement.innerHTML = `
                <div class="cart-item-info">
                    <img src="${item.image}" alt="${item.name}">
                    <span>${item.name}</span>
                </div>
                <span>$${item.price}</span>
                <span>${item.quantity}</span>
                <button class="btn remove-from-cart" data-id="${item.id}">Remove</button>
            `;

            cartItemsElement.appendChild(cartItemElement);
        });

        totalPriceElement.textContent = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);

        document.querySelectorAll(".remove-from-cart").forEach(button => {
            button.addEventListener("click", function() {
                const productId = parseInt(this.getAttribute("data-id"));
                cart = cart.filter(item => item.id !== productId);
                updateCart();
            });
        });
    }

    document.querySelector(".checkout-btn").addEventListener("click", function() {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        alert("Checkout successful!");
        cart = [];
        updateCart();
    });

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Message sent!");
        this.reset();
    });

    // Toggle navigation menu on click
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        menuToggle.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Assuming you have the product and cart functionalities here
});


