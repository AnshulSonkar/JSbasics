let counter = 0;

let counterText = document.getElementById("counter");
let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");

increaseBtn.addEventListener("click", function () {
  counter++;
  counterText.textContent = counter;
});

decreaseBtn.addEventListener("click", function () {
  counter--;
  counterText.textContent = counter;
});