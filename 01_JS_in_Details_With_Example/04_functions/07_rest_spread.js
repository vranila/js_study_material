/* Rest Operator (...)
Collects multiple arguments into an array. */

console.log("Rest Parameter");
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3, 4));
console.log("\n");

//Spread Operator (...) --> Expands array or object.

console.log("Spread with Array");
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = [...arr1, ...arr2];
console.log(combined);
console.log("\n");



console.log("Spread with Object");
let user = { name: "Anila" };
let updatedUser = { ...user, age: 25 };
console.log(updatedUser);
console.log("\n");



console.log("Smart Function Parameters (Default + Rest)");
function calculate(a = 10, b = 20, ...rest) {
    console.log(a, b, rest);
}
calculate();
calculate(5, 15, 25, 35);
