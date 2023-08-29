// Назначаем обработчик события на все кнопки "Добавить в корзину"
let addToCartButtons = document.querySelectorAll('.product__add');
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Назначаем обработчики событий на все кнопки увеличения и уменьшения количества товара
let incrementButtons = document.querySelectorAll('.product__quantity-control_inc');
let decrementButtons = document.querySelectorAll('.product__quantity-control_dec');
incrementButtons.forEach(button => {
  button.addEventListener('click', incrementQuantity);
});
decrementButtons.forEach(button => {
  button.addEventListener('click', decrementQuantity);
});

function addToCart(event) {
  let product = event.target.closest('.product');
  let productId = product.dataset.id;
  let quantity = parseInt(product.querySelector('.product__quantity-value').textContent);if (quantity <= 0) return;
  
  let cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);
  
  if (cartProduct) {
    let cartProductQuantity = parseInt(cartProduct.querySelector('.cart__product-count').textContent);
    cartProduct.querySelector('.cart__product-count').textContent = cartProductQuantity + quantity;
  } else {
    let cartProducts = document.querySelector('.cart__products');
    
    let cartProduct = document.createElement('div');
    cartProduct.classList.add('cart__product');
    cartProduct.dataset.id = productId;
    
    let productImage = product.querySelector('.product__image');
    let cartProductImage = document.createElement('img');
    cartProductImage.classList.add('cart__product-image');
    cartProductImage.src = productImage.src;
    
    let cartProductCount = document.createElement('div');
    cartProductCount.classList.add('cart__product-count');
    cartProductCount.textContent = quantity;
    
    cartProduct.appendChild(cartProductImage);
    cartProduct.appendChild(cartProductCount);
    
    cartProducts.appendChild(cartProduct);
  }
  
  product.querySelector('.product__quantity-value').textContent = '1';
}

function incrementQuantity(event) {
  let quantityValue = event.target.parentNode.querySelector('.product__quantity-value');
  let currentQuantity = parseInt(quantityValue.textContent);
  quantityValue.textContent = currentQuantity + 1;
}

function decrementQuantity(event) {
  let quantityValue = event.target.parentNode.querySelector('.product__quantity-value');
  let currentQuantity = parseInt(quantityValue.textContent);
  if (currentQuantity > 1) {
    quantityValue.textContent = currentQuantity - 1;
  }
}
