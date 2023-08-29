// Получаем все элементы с классом "has-tooltip"
const tooltipElements = document.querySelectorAll('.has-tooltip');

// Создаем элемент подсказки
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

// Функция для отображения подсказки
const showTooltip = (event) => {
  event.preventDefault();

  // Устанавливаем текст подсказки на основе атрибута "title" кликнутого элемента
  tooltip.innerText = event.target.getAttribute('title');

  // Позиционируем подсказку относительно позиции кликнутого элемента
  tooltip.style.top = `${event.target.offsetTop + event.target.offsetHeight}px`;
  tooltip.style.left = `${event.target.offsetLeft}px`;

  // Добавляем класс "tooltip_active" элементу подсказки
  tooltip.classList.add('tooltip_active');

  // Добавляем элемент подсказки в тело документа
  document.body.appendChild(tooltip);
};

// Функция для скрытия подсказки
const hideTooltip = () => {
  // Удаляем класс "tooltip_active" у элемента подсказки
  tooltip.classList.remove('tooltip_active');

  // Удаляем элемент подсказки из тела документа
  tooltip.remove();
};

// Назначаем обработчики клика для каждого элемента с подсказкой
tooltipElements.forEach((element) => {
  element.addEventListener('click', showTooltip);
  element.addEventListener('blur', hideTooltip);
});
