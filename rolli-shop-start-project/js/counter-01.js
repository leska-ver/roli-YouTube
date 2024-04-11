// Находим элементы на странице
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

// Отслеживаем клик на кнопку Минус(btnMinus)
btnMinus.addEventListener('click', function () {

  // Проверяем чтобы счётчик был больше 1
  if ( parseInt(counter.innerText) > 1 ) {// parseInt - это целое число. 0 в data-counter ставят тоже на сайтах. 
    // Изменяем текст в счётчике уменьшая его на 1
    counter.innerText = --counter.innerText;
  }

  
});

// Отслеживаем клик на кнопку Плюс(btnPlus)
btnPlus.addEventListener('click', function () { 
  // Изменяем текст в счётчике увеличивая его на 1
  counter.innerText = ++counter.innerText;
});
