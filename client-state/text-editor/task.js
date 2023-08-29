// Получаем элемент textarea
var editor = document.getElementById('editor');

// Проверяем, есть ли сохраненное значение в локальном хранилище
if(localStorage.getItem('editorText')){
  // Если есть, устанавливаем сохраненное значение в текстовый редактор
  editor.value = localStorage.getItem('editorText');
}

// Слушаем событие изменения текста в редакторе
editor.addEventListener('input', function(){
  // Сохраняем текущее значение текстового редактора в локальное хранилище
  localStorage.setItem('editorText', editor.value);
});
