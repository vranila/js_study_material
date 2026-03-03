let element = document.querySelector(".box");

// ===============================
// classList METHODS
// ===============================

// Add class
element.classList.add("active");

// Remove class
element.classList.remove("active");

// Toggle class
element.classList.toggle("active");

// Check class
console.log(element.classList.contains("active"));

// Replace class
element.classList.replace("old", "new");

// ===============================
// STYLE MANIPULATION
// ===============================

// Inline style
element.style.color = "red";
element.style.backgroundColor = "yellow";

// Multiple styles
element.style.cssText = "color: blue; font-size: 20px;";

// Get computed style
let style = window.getComputedStyle(element);
console.log(style.color);