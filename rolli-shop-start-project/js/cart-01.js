// Div внутри корзины, в который мы добавляем товары
const cartWrapper = document.querySelector('.cart-wrapper');

// Отслеживаем клик на странице
window.addEventListener('click', function (event) {

  // Проверяем что клик был совершен по кнопке "Добавить в корзину"
  if (event.target.hasAttribute('data-cart')) { // Из-за hasAttribute пишем без квадратных скобок data-cart
    
    // Находим карточку с товаром, внутри которой был совершен клик
    const card = event.target.closest('.card');

    // Собираем данные с этого товара и записываем их в единый объект productInfo(В корзину) 55:00
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.product-img').getAttribute('src'),
      title: card.querySelector('.item-title').innerText,
      itemsInBox: card.querySelector('[data-items-in-box]').innerText,
      weight: card.querySelector('.price__weight').innerText,
      price: card.querySelector('.price__currency').innerText,
      couner: card.querySelector('[data-counter]').innerText,
    };

    
    // Собранные данные подставим в шаблон для товара в корзине. Покажет результат(.cart-item) в Корзине 1:01:00 ${productInfo.}
    const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
                        <div class="cart-item__top">
                          <div class="cart-item__img">
                            <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                          </div>
                          <div class="cart-item__desc">
                            <div class="cart-item__title">${productInfo.title}</div>
                            <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

                            <!-- cart-item__details -->
                            <div class="cart-item__details">

                              <div class="items items--small counter-wrapper">
                                <div class="items__control" data-action="minus">-</div>
                                <div class="items__current" data-counter="">${productInfo.couner}</div>
                                <div class="items__control" data-action="plus">+</div>
                              </div>

                              <div class="price">
                                <div class="price__currency">${productInfo.price}</div>
                              </div>

                            </div>
                            <!-- // cart-item__details -->

                          </div>
                        </div>
                      </div>`;

    // Отобразим товар в корзине
    cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
  }
})