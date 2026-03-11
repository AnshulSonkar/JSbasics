// let counter = 0;

// let counterText = document.getElementById("counter");
// let increaseBtn = document.getElementById("increase");
// let decreaseBtn = document.getElementById("decrease");

// increaseBtn.addEventListener("click", function () {
//   counter++;
//   counterText.textContent = counter;
// });

// decreaseBtn.addEventListener("click", function () {
//   counter--;
//   counterText.textContent = counter;
// });




let title = document.getElementById("title");
let button = document.getElementById("toggleBtn");

button.addEventListener("click", function () {
  title.classList.toggle("highlight");
});




