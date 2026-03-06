// ===============================
// CREATE & INSERT ELEMENTS
// ===============================

// Create element
let div = document.createElement("div");

// Add content
div.textContent = "New Div";

// Add class
div.className = "box";

// Append to body
document.body.appendChild(div);

// Append to specific parent
let container = document.querySelector(".container");
container.appendChild(div);

// prepend == prepend() inserts an element at the beginning of a parent element.
container.prepend(div);

// insertBefore
let ref = document.querySelector(".ref");
container.insertBefore(div, ref);

// remove element
div.remove();