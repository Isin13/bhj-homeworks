// Проверяем, было ли уже показано всплывающее окно
if (document.cookie.indexOf('popupShown=1') === -1) {
  // Получаем элемент всплывающего окна
  const popup = document.getElementById('subscribe-modal');

  // Получаем элемент кнопки закрытия окна
  const closeBtn = popup.querySelector('.modal__close');

  // Показываем всплывающее окно
  popup.classList.add('modal_active');

  // Обрабатываем клик по кнопке закрытия окна
  closeBtn.addEventListener('click', function() {
    // Скрываем всплывающее окно
    popup.classList.remove('modal_active');
    // Устанавливаем cookie с информацией о закрытии окна
    document.cookie = 'popupShown=1; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
  });
}
