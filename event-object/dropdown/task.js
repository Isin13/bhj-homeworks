// Находим элементы на странице
const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = document.querySelectorAll('.dropdown__item');

// Функция для открытия/закрытия списка
function toggleDropdown() {
  dropdownList.classList.toggle('dropdown__list_active');
}

// Функция для установки нового значения
function setDropdownValue(event) {
  event.preventDefault();
  const newValue = event.target.textContent.trim();
  dropdownValue.textContent = newValue;
  toggleDropdown();
}

// Назначаем обработчик события для клика на элемент с классом dropdown__value
dropdownValue.addEventListener('click', toggleDropdown);

// Назначаем обработчик события для клика на каждый элемент с классом dropdown__item
dropdownItems.forEach(item => {
  item.addEventListener('click', setDropdownValue);
});

