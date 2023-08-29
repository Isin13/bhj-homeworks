// Получаем нужные элементы
const taskForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');

// Функция для добавления новой задачи
function addTask(event) {
  event.preventDefault(); // Отменяем стандартное поведение формы

  const taskText = taskInput.value.trim(); // Получаем текст задачи и удаляем лишние пробелы

  if (taskText !== '') { // Если введенный текст не пустой
    // Создаем новую задачу
    const task = document.createElement('div');
    task.className = 'task';

    const taskTitle = document.createElement('div');
    taskTitle.className = 'task__title';
    taskTitle.textContent = taskText;

    const taskRemove = document.createElement('a');
    taskRemove.className = 'task__remove';
    taskRemove.innerHTML = '&times;';

    // Добавляем обработчик события для удаления задачи
    taskRemove.addEventListener('click', removeTask);

    // Добавляем элементы задачи внутрь новой задачи
    task.appendChild(taskTitle);
    task.appendChild(taskRemove);

    // Добавляем новую задачу в список задач
    taskList.appendChild(task);

    // Очищаем поле ввода после добавления задачи
    taskInput.value = '';
  }
}

// Функция для удаления задачи
function removeTask(event) {
  const task = event.target.closest('.task'); // Находим родительский элемент задачи
  taskList.removeChild(task); // Удаляем задачу из списка
}

// Добавляем обработчик события для формы при нажатии на Enter
taskForm.addEventListener('submit', addTask);
