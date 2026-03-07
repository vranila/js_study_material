// ===============================
// WHAT IS A CALLBACK?
// ===============================

// A callback is a function passed as an argument to another function and executed later.

function fetchData(callback) {
  // Simulating async operation
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

// Passing a function as argument
fetchData(function (data) {
  console.log(data);
});


// ===============================
// CALLBACK HELL
// ===============================

// Nested callbacks create hard-to-read code.

setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");
    }, 1000);

  }, 1000);

}, 1000);

// This structure becomes difficult to maintain.
// Promises were introduced to solve this.