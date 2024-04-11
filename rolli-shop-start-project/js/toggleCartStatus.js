function toggleCartStatus() {//1:34:04

  const cartWrapper = document.querySelector('.cart-wrapper');
  const cartEmptyBadge = document.querySelector('[data-cart-empty]');
  // 01:45:33 Показ блока "Оформить заказ"
  const orderForm = document.querySelector('#order-form');
 
  if (cartWrapper.children.length > 0) {
    console.log('FULL');
    cartEmptyBadge.classList.add('none');
    orderForm.classList.remove('none');
} else {
    console.log('EMPTY');
    cartEmptyBadge.classList.remove('none');
    orderForm.classList.add('none');
}

}