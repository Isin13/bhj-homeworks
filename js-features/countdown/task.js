window.onload = function () {
  let duration = 80;
  let display = document.getElementById('timer');
  countdownTimer(duration, display);
};

function countdownTimer(duration, display) {
  let timer = duration, minutes, seconds;
  let countdown = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      display.textContent = minutes + ':' + seconds;
      if (timer-- < 0) {
          clearInterval(countdown);
          console.log('Вы победили в конкурсе!');
          alert('Вы победили в конкурсе!')
      }
  }, 1000);
}






