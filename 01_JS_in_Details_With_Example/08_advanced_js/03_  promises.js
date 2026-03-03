// ===============================
// WHAT IS A PROMISE?
// ===============================

// A Promise represents a future value.
// It has 3 states:
// 1. pending
// 2. fulfilled (resolve)
// 3. rejected (reject)

let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation successful"); // fulfilled
  } else {
    reject("Operation failed"); // rejected
  }
});


// ===============================
// CONSUMING A PROMISE
// ===============================

// .then() handles resolved value
// .catch() handles errors
// .finally() runs regardless of outcome

promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finished execution");
  });


// ===============================
// PROMISE CHAINING
// ===============================

// Each .then() returns a new Promise
// allowing sequential operations.

Promise.resolve(5)
  .then(num => num * 2)
  .then(num => num + 3)
  .then(result => console.log(result)); // 13


// ===============================
// STATIC PROMISE METHODS
// ===============================

// Promise.all()
// Waits for ALL promises to resolve.
// Rejects immediately if one fails.

Promise.all([
  Promise.resolve(1),
  Promise.resolve(2)
]).then(values => console.log(values));


// Promise.race()
// Returns the first settled promise.

Promise.race([
  new Promise(res => setTimeout(res, 100, "Fast")),
  new Promise(res => setTimeout(res, 500, "Slow"))
]).then(value => console.log(value));


// Promise.allSettled()
// Waits for all promises (even rejected ones).

Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Fail")
]).then(results => console.log(results));


// Promise.any()
// Resolves when first promise fulfills.

Promise.any([
  Promise.reject("Error"),
  Promise.resolve("First success")
]).then(value => console.log(value));