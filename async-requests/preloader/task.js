// Получаем ссылки на нужные элементы страницы
const itemsElement = document.querySelector('#items');
const loaderElement = document.querySelector('#loader');

// Функция для загрузки курса валют
function loadCurrency() {
  // Показываем анимацию загрузки
  loaderElement.classList.add('loader_active');

  // Отправляем GET-запрос по адресу
  fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
    .then(response => response.json())
    .then(data => {
      // Очищаем элементы валют перед загрузкой новых данных
      itemsElement.innerHTML = '';

      // Обрабатываем полученные данные
      for(const currency of data) {
        // Создаем элементы валюты
        const codeElement = document.createElement('div');
        codeElement.classList.add('item__code');
        codeElement.innerText = currency.CharCode;

        const valueElement = document.createElement('div');
        valueElement.classList.add('item__value');
        valueElement.innerText = currency.Value;

        const currencyElement = document.createElement('div');
        currencyElement.classList.add('item__currency');
        currencyElement.innerText = 'руб.';

        // Создаем элемент валюты и добавляем его в #items
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.appendChild(codeElement);
        itemElement.appendChild(valueElement);
        itemElement.appendChild(currencyElement);
        itemsElement.appendChild(itemElement);
      }

      // Скрываем анимацию загрузки
      loaderElement.classList.remove('loader_active');
    })
    .catch(error => {
      // Обрабатываем ошибку
      console.error('Ошибка при загрузке курса валют:', error);

      // Скрываем анимацию загрузки
      loaderElement.classList.remove('loader_active');
    });
}

// Загружаем курс валют при загрузке страницы
document.addEventListener('DOMContentLoaded', loadCurrency);
