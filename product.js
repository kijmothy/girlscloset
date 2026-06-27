const query = new URLSearchParams(window.location.search);
const productId = query.get("id");
const product = products.find((item) => item.id === productId) || products[0];

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value || "";
}

function renderProductDetail() {
  if (!product) return;

  document.title = `${product.name}｜女孩衣櫃間 Girls Closet`;

  setText("productBrandLabel", product.brand);
  setText("productTitle", product.name);
  setText("productIntro", product.description);
  setText("productBrand", product.brand);
  setText("productName", product.name);
  setText("productPrice", product.price);
  setText("productDescription", product.description);
  setText("productSize", product.size);
  setText("productColor", product.color);
  setText("productMaterial", product.material);

  const imageBox = document.getElementById("productImageBox");
  if (imageBox) {
    imageBox.innerHTML = product.image
      ? `<img src="${product.image}" alt="${product.brand} ${product.name}" />`
      : `<div class="product-detail-placeholder">${product.brand}</div>`;
  }

  const lineButton = document.getElementById("productLineButton");
  if (lineButton) {
    const message = `您好，我想詢問 ${product.brand} ${product.name}`;
    lineButton.href = `${LINE_URL}?text=${encodeURIComponent(message)}`;
    lineButton.textContent = product.soldout ? "已售完，可詢問是否補貨" : "LINE 詢問代購";
  }
}

renderProductDetail();
