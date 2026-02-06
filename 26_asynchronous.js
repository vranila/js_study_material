/*
=============================================================
JAVASCRIPT ASYNCHRONOUS – COMPLETE EXAMPLES
=============================================================
*/

// -------------------------------------------------------------
// Asynchronous Example
console.log("Asynchronous Example");

console.log("Start");
setTimeout(() => {
  console.log("Async Task Done");
}, 1000);
console.log("End");

// -------------------------------------------------------------
// Callback Functions
console.log("\nCallback Functions");

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function done() {
  console.log("Callback executed");
}

greet("Anila", done);

// -------------------------------------------------------------
// Promises
console.log("\nPromises");

let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Promise Resolved");
  } else {
    reject("Promise Rejected");
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error));

// -------------------------------------------------------------
// Promise Chaining
console.log("\nPromise Chaining");

new Promise(resolve => resolve(5))
  .then(num => num * 2)
  .then(num => num + 10)
  .then(result => console.log("Final Result:", result));

// -------------------------------------------------------------
// Async / Await
console.log("\nAsync / Await");

function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data Received"), 1000);
  });
}

async function fetchData() {
  let result = await getData();
  console.log(result);
}

fetchData();

// -------------------------------------------------------------
// Microtasks (Promise vs setTimeout)
console.log("\nMicrotasks Example");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => {
  console.log("Promise Microtask");
});

console.log("Synchronous Log");

// -------------------------------------------------------------
// Promisification
console.log("\nPromisification");

function asyncTask(callback) {
  setTimeout(() => {
    callback(null, "Task Completed");
  }, 1000);
}

function promisifiedTask() {
  return new Promise((resolve, reject) => {
    asyncTask((err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

promisifiedTask().then(res => console.log(res));

// -------------------------------------------------------------
// Timing Events
console.log("\nTiming Events");

// setTimeout()
console.log("\nsetTimeout()");

setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

// -------------------------------------------------------------
// setInterval()
console.log("\nsetInterval()");

let count = 0;
let intervalId = setInterval(() => {
  console.log("Interval count:", count);
  count++;
  if (count === 3) {
    clearInterval(intervalId);
    console.log("Interval stopped");
  }
}, 1000);
