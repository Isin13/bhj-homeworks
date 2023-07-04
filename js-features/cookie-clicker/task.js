let counter = 0;
let image = document.getElementById("cookie");
let counterDisplay = document.getElementById("clicker__counter");

image.addEventListener("click", function (){
  counter++;
  counterDisplay.textContent = counter;
});
// уменьшил картинку с помощю css. 
// в данном случае кажеться более уместным

/* 
#cookie:active {
  transform: scale(0.85);
}
*/





