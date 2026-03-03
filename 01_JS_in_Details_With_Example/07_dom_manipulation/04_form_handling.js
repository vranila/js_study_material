// ===============================
// FORM HANDLING
// ===============================

let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;

  console.log(username, password);
});

// Input event
let input = document.querySelector("#username");

input.addEventListener("input", function (e) {
  console.log(e.target.value);
});

// Change event
input.addEventListener("change", function (e) {
  console.log("Changed:", e.target.value);
});