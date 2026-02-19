const productContainer = document.getElementById("product-container");
const errorDiv = document.getElementById("error");

const API_URL = "https://fakestoreapi.com/products";

function fetchProducts() {
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return response.json(); // Convert response to JSON
    })
    .then((data) => {
      displayProducts(data);
    })
    .catch((error) => {
      showError(error.message);
    });
}

function displayProducts(products) {
  productContainer.innerHTML = "";

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";

    const img = document.createElement("img");
    img.src = product.image;

    const title = document.createElement("h3");
    title.innerText = product.title;

    productDiv.appendChild(img);
    productDiv.appendChild(title);

    productContainer.appendChild(productDiv);
  });
}

function showError(message) {
  errorDiv.innerText = message;
}
fetchProducts();
