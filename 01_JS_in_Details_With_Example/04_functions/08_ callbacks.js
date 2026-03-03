/* A function passed as argument to another function. */

//Basic Callback
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Anila", sayBye);



//Anonymous Callback
function processUser(name, callback) {
  console.log("Processing " + name);
  callback();
}

processUser("Anila", function() {
  console.log("Done");
});




function calculateTotal(price, tax = 0.18) {
  return price + price * tax;
}

const printResult = (amount) => {
  console.log("Total Amount:", amount);
};

let total = calculateTotal(1000);
printResult(total);

//setTimeout (Async Callback)
console.log("Start");

setTimeout(function() {
  console.log("Inside Timeout");
}, 2000);

console.log("End");


/* Explanation:
setTimeout runs asynchronously.
Callback executes after delay. */