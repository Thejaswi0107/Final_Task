const productContainer = document.getElementById("product-container");
const errorDiv = document.getElementById("error");

const API_URL = "https://dummyjson.com/products";

function fetchProducts() {
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Unable to fetch products");
      }
      return response.json();
    })
    .then((data) => {
      displayProducts(data.products);
    })
    .catch((error) => {
      showError(error.message);
    });
}

function displayProducts(products) {
  productContainer.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product";

    const image = document.createElement("img");
    image.src = product.thumbnail;

    const title = document.createElement("h3");
    title.innerText = product.title;

    productCard.appendChild(image);
    productCard.appendChild(title);

    productContainer.appendChild(productCard);
  });
}

function showError(message) {
  errorDiv.innerText = message;
}
fetchProducts();