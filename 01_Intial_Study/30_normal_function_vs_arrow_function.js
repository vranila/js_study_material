/* 
-------------------------------------------------------------
NORMAL FUNCTIONS vs ARROW FUNCTIONS — CLEAR COMPARISON

Goal:
Understand how these two styles differ in syntax, usage, and 
behavior. Both do the same job but arrow functions offer a 
shorter, modern syntax.

This file shows:
1. Basic syntax difference
2. Parameter handling
3. Return values (explicit & implicit)
4. Use in callbacks (common in real JS)
-------------------------------------------------------------
*/


// 🧩 1️⃣ BASIC FORM — Normal Function
function addNormal(a, b) {
  return a + b;
}

console.log("Normal add:", addNormal(5, 3));  // → 8


// 🧩 2️⃣ BASIC FORM — Arrow Function
const addArrow = (a, b) => {
  return a + b;
};

console.log("Arrow add:", addArrow(5, 3));    // → 8



// -------------------------------------------------------------
// 🧩 3️⃣ SINGLE-LINE ARROW FUNCTION (implicit return)
// No {} means auto-return
const addArrowShort = (a, b) => a + b;

console.log("Arrow short add:", addArrowShort(5, 3));  // → 8



// -------------------------------------------------------------
// 🧩 4️⃣ NO PARAMETERS
function greetNormal() {
  console.log("Hello from normal function");
}

const greetArrow = () => console.log("Hello from arrow function");

greetNormal();
greetArrow();



// -------------------------------------------------------------
// 🧩 5️⃣ ONE PARAMETER — parentheses optional
function squareNormal(n) {
  return n * n;
}

const squareArrow = n => n * n;

console.log("Normal square:", squareNormal(6));
console.log("Arrow square:", squareArrow(6));



// -------------------------------------------------------------
// 🧩 6️⃣ USING THEM IN CALLBACKS (VERY COMMON USE CASE)

let numbers = [1, 2, 3, 4, 5];

// Normal function callback
let doubledNormal = numbers.map(function (num) {
  return num * 2;
});

// Arrow function callback (much cleaner)
let doubledArrow = numbers.map(num => num * 2);

console.log("Normal MAP:", doubledNormal);
console.log("Arrow MAP:", doubledArrow);



/* 
-------------------------------------------------------------
NOTES (very important):

1. Arrow functions are shorter & great for callbacks.
2. Normal functions have their own `this` — arrow functions DO NOT.
   (We will explore `this` later, once you're ready.)
3. Arrow functions cannot be used as constructors.

But for everyday logic, arrow functions are perfect.
-------------------------------------------------------------
*/