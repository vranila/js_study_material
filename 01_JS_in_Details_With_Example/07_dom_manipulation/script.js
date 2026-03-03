// ===============================
// SELECTING ELEMENTS
// ===============================

let title = document.getElementById("title");
let boxes = document.querySelectorAll(".box");
let changeBtn = document.getElementById("changeBtn");
let addBtn = document.getElementById("addBtn");
let form = document.getElementById("loginForm");
let container = document.querySelector(".container");

// ===============================
// CHANGING CONTENT
// ===============================

changeBtn.addEventListener("click", function () {

    title.textContent = "Title Changed!";

    boxes.forEach(box => {
        box.classList.toggle("active");
    });

});

// ===============================
// CREATING ELEMENTS
// ===============================

addBtn.addEventListener("click", function () {

    let newDiv = document.createElement("div");
    newDiv.textContent = "New Dynamic Box";
    newDiv.classList.add("box");

    container.appendChild(newDiv);

});

// ===============================
// FORM HANDLING
// ===============================

form.addEventListener("submit", function (e) {

    e.preventDefault(); // stop page reload

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    console.log("Username:", username);
    console.log("Password:", password);

    alert("Form Submitted!");
});

// ===============================
// EVENT DELEGATION (Dynamic Elements)
// ===============================

container.addEventListener("click", function (e) {

    if (e.target.classList.contains("box")) {
        e.target.style.backgroundColor = "orange";
    }

});