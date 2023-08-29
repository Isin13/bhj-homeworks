// Функция для отправки GET-запроса
async function getPollData() {
  try {
    const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
// Функция для отображения опроса
function displayPoll(pollData) {
  const pollTitleElement = document.getElementById('poll__title');
  const pollAnswersElement = document.getElementById('poll__answers');
  
  pollTitleElement.textContent = pollData.data.title;
  
  pollAnswersElement.innerHTML = '';
  pollData.data.answers.forEach(answer => {
    const answerButton = document.createElement('button');
    answerButton.className = 'poll__answer';
    answerButton.textContent = answer;
    answerButton.addEventListener('click', () => {
      alert('Спасибо, ваш голос засчитан!');
    });
    pollAnswersElement.appendChild(answerButton);
  });
}

// Вызываем функцию для получения и отображения опроса
getPollData()
  .then(pollData => displayPoll(pollData))
  .catch(error => console.log(error));
