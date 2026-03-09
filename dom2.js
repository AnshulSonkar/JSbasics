let button = document.getElementById("addBtn");
let list = document.getElementById("list");

button.addEventListener("click", function () {

  let li = document.createElement("li");

  li.textContent = "New Item";

  list.appendChild(li);

});




// To add Dynamic content 
// button.addEventListener("click", function () {

//   let li = document.createElement("li");

//   li.textContent = "Item " + Math.floor(Math.random() * 100);

//   list.appendChild(li);

// });
