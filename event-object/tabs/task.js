// Получаем все элементы с классом "tab"
const tabs = document.querySelectorAll('.tab');

// Получаем все элементы с классом "tab__content"
const tabContents = document.querySelectorAll('.tab__content');

// Перебираем все элементы с классом "tab"
tabs.forEach((tab, index) => {
  // Регистрируем обработчик события "click" для каждой вкладки
  tab.addEventListener('click', () => {
    // Удаляем класс "tab_active" у всех вкладок
    tabs.forEach((tabItem) => tabItem.classList.remove('tab_active'));
    
    // Добавляем класс "tab_active" только выбранной вкладке
    tab.classList.add('tab_active');
    
    // Удаляем класс "tab__content_active" у всех содержимых блоков
    tabContents.forEach((content) => content.classList.remove('tab__content_active'));
    
    // Добавляем класс "tab__content_active" только соответствующему блоку содержимого
    tabContents[index].classList.add('tab__content_active');
  });
});
