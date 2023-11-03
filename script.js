const products = [
    {
        id: 1,
        title: "Dress",
        description: "Beautiful dress",
        price: 19.99,
        category: "Category A",
        image: "product1.jpg",
        image: "dress.jpg"
    },
    {
        id: 2,
        title: "Pink Dress",
        description: "Dress",
        price: 29.99,
        category: "Category B",
        image: "product2.jpg",
        image: "pinkdress.jpg",
        
    },
    {
        id: 3,
        title: "Sandal",
        description: "Cindrella shoes",
        price: 15.99,
        category: "Category A",
        image: "product3.jpg",
        image: "sandal.jpg",

    },

];

const productsPerPage = 3; 
let currentPage = 1;
let currentCategory = "All";

function displayProducts() {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";

    const filteredProducts = products.filter(product => currentCategory === "All" || product.category === currentCategory);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

    productsToDisplay.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";

        const productImage = document.createElement("img");
        productImage.src = product.image;

        const productTitle = document.createElement("h2");
        productTitle.textContent = product.title;

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        const productPrice = document.createElement("p");
        productPrice.textContent = `Price: $${product.price.toFixed(2)}`;

        productCard.appendChild(productImage);
        productCard.appendChild(productTitle);
        productCard.appendChild(productDescription);
        productCard.appendChild(productPrice);
        productsContainer.appendChild(productCard);
    });
}

function updatePagination() {
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = "";

    const filteredProducts = products.filter(product => currentCategory === "All" || product.category === currentCategory);
    const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

    for (let i = 1; i <= pageCount; i++) {
        const pageButton = document.createElement("button");
        pageButton.textContent = i;
        pageButton.addEventListener("click", () => {
            currentPage = i;
            displayProducts();
            updatePagination();
        });
        paginationContainer.appendChild(pageButton);
    }
}

document.getElementById("category-filter").addEventListener("change", (event) => {
    currentCategory = event.target.value;
    currentPage = 1;
    displayProducts();
    updatePagination();
});

displayProducts();
updatePagination();
