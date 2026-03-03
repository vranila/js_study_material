/* What is Arrow Function?

Shorter syntax introduced in ES6. */

console.log("Basic Arrow Function");
const greet = () => {
  console.log("Hello from arrow function");
};
greet();
console.log("\n");



//With Parameters
console.log("With Parameters");
const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(4, 5));

console.log("\n");

// Arrow Function -- Short Syntax (Implicit Return)
console.log("Arrow Function  --  Short Syntax ");
const square = (n) => n * n;
console.log(square(6));
console.log("\n");


