/* Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope during compilation. */

// Variable Hoisting
console.log(a); // undefined
var a = 10;

// Function Hoisting
greet();

function greet() {
    console.log("Hello World");
}

// let and const are not initialized during hoisting
// console.log(b); // ReferenceError
let b = 20;