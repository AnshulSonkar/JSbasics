let input = document.getElementById("nameInput");
let button = document.getElementById("saveBtn");
let output = document.getElementById("output");

button.addEventListener("click", function () {

  localStorage.setItem("name", input.value);

  output.textContent = "Saved: " + input.value;

});