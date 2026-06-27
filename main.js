const productGrid = document.getElementById("productGrid");
const filterButtons = document.querySelectorAll(".filter-button");

function renderProducts(filter = "all") {
  if (!productGrid) return;

  const visibleProducts = filter === "all"
    ? products
    : products.filter((product) => product.brand === filter);

  productGrid.innerHTML = visibleProducts.map((product) => {
    const imageHtml = product.image
      ? `<img src="${product.image}" alt="${product.brand} ${product.name}" />`
      : `<span>${product.brand}</span>`;

    const soldoutClass = product.soldout ? " soldout" : "";
    const buttonText = product.soldout ? "已售完" : "查看商品";
    const productUrl = `product.html?id=${encodeURIComponent(product.id)}`;

    return `
      <article class="product-card${soldoutClass}">
        <a class="product-image placeholder" href="${productUrl}">
          ${imageHtml}
          ${product.badge ? `<em>${product.badge}</em>` : ""}
        </a>
        <div class="product-info">
          <span class="product-brand">${product.brand}</span>
          <h3>${product.name}</h3>
          <p class="product-price">${product.price}</p>
          <p>${product.description}</p>
          <p class="product-meta">尺寸：${product.size}｜顏色：${product.color}</p>
          <a class="line-button" href="${productUrl}">${buttonText}</a>
        </div>
      </article>
    `;
  }).join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.filter);
  });
});

renderProducts();
