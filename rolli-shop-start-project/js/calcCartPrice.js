//function calcCartPrice() {//1:50:54
function calcCartPriceAndDelivery() {//2:11:56
  // const cartItems = document.querySelectorAll('.cart-item');
  const cartWrapper = document.querySelector('.cart-wrapper');
  const priceElements = cartWrapper.querySelectorAll('.price__currency');
  const totalPriceEl = document.querySelector('.total-price');
  const deliveryCost = document.querySelector('.delivery-cost');
  const cartDelivery = document.querySelector('[data-cart-delivery]');

  // Общая стоимость товара
  let priceTotal = 0;

  // Обходим все блоки с ценами в корзине
  priceElements.forEach(function (item) {
    // Математика. Находим количество товара. 1:58:54. 2:08:44 написан вообще другой код.
    /*const amountEl = item.querySelector('[data-counter]');
    const priceEl = item.querySelector('.price-currency');
    const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
    totalPrice += currentPrice;*/
  // Находим количество товара 2:08:44
  const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
  // Добавляем стоимость товара в общую стоимость (кол-во * цену)
  priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
});

// Отображаем цену на странице
totalPriceEl.innerText = priceTotal;

// Скрываем / Показываем блок со стоимостью доставки
if (priceTotal > 0) {
  cartDelivery.classList.remove('none');
} else {
  cartDelivery.classList.add('none');
}

// Указываем стоимость доставки
if (priceTotal >= 600) {
  deliveryCost.classList.add('free');
  deliveryCost.innerText = 'бесплатно';
} else {
  deliveryCost.classList.remove('free');
  deliveryCost.innerText = '250 ₽';
}

}