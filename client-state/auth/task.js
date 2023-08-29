// Получение элементов формы и блока welcome
const signinForm = document.getElementById("signin__form");
const welcomeBlock = document.getElementById("welcome");
const userIdElement = document.getElementById("user_id");

// Проверка, есть ли id пользователя в локальном хранилище
if (localStorage.getItem("user_id")) {
  // Идентификатор пользователя найден - отображаем блок welcome
  showWelcomeBlock(localStorage.getItem("user_id"));
}

// Обработчик события отправки формы
signinForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Предотвращение отправки формы по умолчанию

  // Получение значения полей логина и пароля
  const login = event.target.elements.login.value;
  const password = event.target.elements.password.value;

  try {
    // Отправка POST-запроса на сервер для авторизации
    const response = await fetch(
      "https://students.netoservices.ru/nestjs-backend/auth",
      {
        method: "POST",
        body: JSON.stringify({ login, password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      // Авторизация успешна - сохраняем id пользователя в локальное хранилище
      localStorage.setItem("user_id", data.user_id);

      // Отображаем блок welcome с заданным именем пользователя
      showWelcomeBlock(data.username);
    } else {
      // Авторизация не удалась - выводим сообщение об ошибке
      alert("Неверный логин/пароль");
    }
  } catch (error) {
    console.error(error);
  }
});

// Функция для отображения блока welcome с заданным именем пользователя
function showWelcomeBlock(username) {
  welcomeBlock.classList.add("welcome_active");
  userIdElement.textContent = username;
}
