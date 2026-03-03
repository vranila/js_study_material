
/* Example – Hoisting Difference  
normal function can hoist Works because declarations are hoisted.
But:
sayHi(); // Error

const sayHi = function() {
  console.log("Hi");
}; */

sayHello();
function sayHello() {
  console.log("Hello");
}


// Function Hoisting
hoisted();
function hoisted() {
    console.log("Function Hoisted");
}
