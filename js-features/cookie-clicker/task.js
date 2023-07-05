// Получение элементов из HTML
const cookieImg = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

// Инициализация счетчика кликов и размера картинки
let clickCount = 0;
let imgSize = 200; // Начальный размер картинки

// Обработчик события клика на картинке
cookieImg.addEventListener('click', function() {
   clickCount++; // Увеличение счетчика кликов

   // Проверка на четное или нечетное количество кликов
   if (clickCount % 2 === 0) {
      imgSize += 50;  // Увеличение размера картинки
   } else {
      imgSize -= 50;  // Уменьшение размера картинки
   }

   // Установка нового размера картинки
   cookieImg.setAttribute('width', imgSize);

   // Обновление счетчика кликов на странице
   counter.textContent = clickCount;
});



