// Добавляем прослушку на всем окне
window.addEventListener('click', function (event) {

  // Обьявляем переменную для счётчика ('[data-counter]')
  let counter;

  // Проверяем клик строго по кнопкам Плюс либо Минус
  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
    // Находим обертку счётчика
    const counterWrapper = event.target.closest('.counter-wrapper');
    // Находим див с числом счётчика
    counter = counterWrapper.querySelector('[data-counter]');
  }  

  // Проверяем является ли элемент по которому был совершен клик кнопкой Плюс
  if (event.target.dataset.action === 'plus') {
    // Изменяем текст в счётчике увеличивая его на 1
    counter.innerText = ++counter.innerText;
  }

  // Проверяем является ли элемент по которому был совершен клик кнопкой Минус
  if (event.target.dataset.action === 'minus') {

    // Проверяем чтобы счётчик был больше 1
    if (parseInt(counter.innerText) > 1) {// parseInt - это целое число. 0 в data-counter ставят тоже на сайтах. 
    // Изменяем текст в счётчике уменьшая его на 1
    counter.innerText = --counter.innerText;
  } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
      // Проверка на товар который находится в корзине 1:22:04. Переписали 1:28:24
      console.log('IN CART!!!!');
      // Удаляем товар из корзины
      event.target.closest('.cart-item').remove();

      // Отображение статуса корзины Пустая / Полная. Подключение файла toggleCartStatus.js 1:38:57
      toggleCartStatus();

      // Пересчет общей стоимости товаров в корзине
      // calcCartPrice();
			calcCartPriceAndDelivery();//2:11:56
    }
  }

  // Проверяем клик на + или - внутри коризины
	if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
		// Пересчет общей стоимости товаров в корзине
		// calcCartPrice();
    calcCartPriceAndDelivery();//2:11:56
	}

});

