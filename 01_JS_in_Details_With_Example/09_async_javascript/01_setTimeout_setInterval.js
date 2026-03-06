// ===============================
// setTimeout()
// ===============================

// setTimeout schedules a function to run ONCE
// after a specified delay (in milliseconds).
// It does NOT block the main thread.

setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000); // 2000ms = 2 seconds


// setTimeout returns a timeout ID
// which can be used to cancel it before execution.

let timeoutId = setTimeout(() => {
  console.log("This will not execute");
}, 3000);

// Cancels the scheduled timeout
clearTimeout(timeoutId);


// ===============================
// setInterval()
// ===============================

// setInterval runs a function repeatedly
// at fixed time intervals.

let intervalId = setInterval(() => {
  console.log("Runs every 1 second");
}, 1000);

// clearInterval stops the repeated execution.
setTimeout(() => {
  clearInterval(intervalId);
}, 5000); // Stops after 5 seconds