// Получаем ссылки на элементы с классами font-size и book
var fontSizeLinks = document.getElementsByClassName("font-size");
var bookElement = document.getElementsByClassName("book")[0];

// Добавляем обработчик события для каждой ссылки на размер шрифта
for (var i = 0; i < fontSizeLinks.length; i++) {
  fontSizeLinks[i].addEventListener("click", changeFontSize);
}

// Функция для изменения размера шрифта и класса активного элемента
function changeFontSize(event) {
  event.preventDefault();

  // Удаляем класс font-size_active у всех элементов
  for (var i = 0; i < fontSizeLinks.length; i++) {
    fontSizeLinks[i].classList.remove("font-size_active");
  }

  // Добавляем класс font-size_active к текущему элементу
  this.classList.add("font-size_active");

  // Получаем значение data-size текущего элемента
  var size = this.getAttribute("data-size");

  // Удаляем все классы размеров шрифта у элемента book
  bookElement.classList.remove("book_fs-big", "book_fs-small");

  // Добавляем класс соответствующего размера шрифта к элементу book
  if (size === "big") {
    bookElement.classList.add("book_fs-big");
  } else if (size === "small") {
    bookElement.classList.add("book_fs-small");
  }
}

