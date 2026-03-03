// ===============================
// MOST COMMON EVENTS
// ===============================

let btn = document.querySelector("button");

// addEventListener
btn.addEventListener("click", function () {
  console.log("Button clicked");
});

// Arrow function
btn.addEventListener("click", () => {
  console.log("Clicked again");
});

// Event object
btn.addEventListener("click", function (event) {
  console.log(event.target);
});

// Remove event
function handleClick() {
  console.log("Removed later");
}

btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick);

// Other common events
document.addEventListener("keydown", e => console.log(e.key));
document.addEventListener("mouseover", () => console.log("Mouse Over"));
document.addEventListener("mouseout", () => console.log("Mouse Out"));
document.addEventListener("submit", e => e.preventDefault());