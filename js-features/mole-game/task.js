const holeElements = document.querySelectorAll(".hole");

let deadCount = 0;
let lostCount = 0;


// Функция для обработки события клика на элемент
function handleClick(event) {
  const element = event.target;

  // Проверяем, есть ли у элемента класс 'hole_has-mole'
  if (element.classList.contains("hole_has-mole")) {
    // Увеличиваем значение переменной deadCount на 1
    deadCount++;
    if (deadCount % 10 === 0) {
      alert('вы победили');
    
    }
  } else {
    // Увеличиваем значение переменной lostCount на 1
    lostCount++;

    // Проверяем, превышает ли значение lostCount 5
    if (lostCount > 5) {
      lostCount = 0;
      deadCount = 0;
      confirm("проиграл. ещё игру?");
  
    }
  }
  // Обновляем значения переменных в HTML
  document.getElementById("dead").textContent = deadCount;
  document.getElementById("lost").textContent = lostCount;
}

// Добавляем обработчик клика для каждого элемента
holeElements.forEach((element) => {
  element.addEventListener("click", handleClick);
});