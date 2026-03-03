// ===============================
// MOST COMMON CONTENT CHANGES
// ===============================

let element = document.getElementById("demo");

// Change text
element.textContent = "New Text";

// Change HTML
element.innerHTML = "<b>Bold Text</b>";

// Get content
console.log(element.textContent);
console.log(element.innerHTML);

// Change attribute
element.setAttribute("title", "Tooltip");

// Get attribute
console.log(element.getAttribute("title"));

// Remove attribute
element.removeAttribute("title");

// Change input value
let input = document.querySelector("input");
input.value = "Hello";

// Image src change
let img = document.querySelector("img");
img.src = "image.jpg";