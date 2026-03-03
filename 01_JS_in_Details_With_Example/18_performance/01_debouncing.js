// ==========================================================
// Debouncing
// ==========================================================
// Debouncing delays function execution until
// user stops triggering event for a specified time.
//
// Common use cases:
// - Search input
// - Resize event
// - Scroll event
//
// Prevents excessive API calls
// ==========================================================

function debounce(fn, delay) {

  let timeout;

  return function (...args) {

    // Clear previous timer
    clearTimeout(timeout);

    // Set new timer
    timeout = setTimeout(() => {

      // Preserve context (this)
      fn.apply(this, args);

    }, delay);
  };
}

// Example usage:
window.addEventListener("resize",
  debounce(function () {
    console.log("Resized");
  }, 500)
);