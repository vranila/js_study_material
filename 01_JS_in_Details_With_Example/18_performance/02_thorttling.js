// ==========================================================
// Throttling
// ==========================================================
// Throttling ensures a function executes
// at most once every specified interval.
//
// Use cases:
// - Scroll tracking
// - Mouse movement
// - Rate-limited API calls
// ==========================================================

function throttle(fn, limit) {

  let inThrottle = false;

  return function (...args) {

    if (!inThrottle) {

      fn.apply(this, args);

      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Example usage:
window.addEventListener("scroll",
  throttle(function () {
    console.log("Scrolling...");
  }, 1000)
);