// Получаем ссылки на необходимые элементы
const progressBar = document.getElementById('progress');
const form = document.getElementById('form');

// Создаем обработчик события отправки формы
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData(); // Создаем объект FormData для передачи файла

        formData.append('file', file); // Добавляем файл в FormData

        const xhr = new XMLHttpRequest(); // Создаем объект XMLHttpRequest
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload'); // Устанавливаем URL для отправки запроса
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

        // Устанавливаем обработчик события изменения состояния загрузки
        xhr.upload.addEventListener('progress', (event) => {
            if (event.lengthComputable) {
                const progress = (event.loaded / event.total); // Вычисляем прогресс загрузки в процентах
                progressBar.value = progress; // Обновляем значение прогресса
            }
        });

        // Устанавливаем обработчик события окончания загрузки
        xhr.addEventListener('load', () => {
            // Здесь можно выполнить дополнительные действия, если загрузка завершилась успешно
        });

        // Устанавливаем обработчик события ошибки загрузки
        xhr.addEventListener('error', () => {
            // Здесь можно выполнить дополнительные действия, если произошла ошибка загрузки
        });

        xhr.send(formData); // Отправляем запрос с FormData
    }
});
