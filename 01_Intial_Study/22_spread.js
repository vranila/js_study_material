// SPREAD OPERATOR (...) — ALL EXAMPLES WITH HEADINGS

// 1) Copying an Array
console.log("1) Copying an Array");
let a1 = [1, 2, 3];
let a2 = [...a1];
a2.push(4);
console.log(a1); // [1, 2, 3]
console.log(a2); // [1, 2, 3, 4]
console.log("--------------------");

// 2) Merging Arrays
console.log("2) Merging Arrays");
let x = [10, 20];
let y = [30, 40];
let merged = [...x, ...y];
console.log(merged); // [10, 20, 30, 40]
console.log("--------------------");

// 3) Passing Array Elements to Function
console.log("3) Passing Array Elements to Function");
function sum(a, b, c) {
  return a + b + c;
}
let vals = [5, 10, 15];
console.log(sum(...vals)); // 30
console.log("--------------------");

// 4) Copying an Object
console.log("4) Copying an Object");
let user = { name: "Alice", age: 25 };
let copyUser = { ...user };
console.log(copyUser);
console.log("--------------------");

// 5) Merging Objects
console.log("5) Merging Objects");
let extra = { city: "London" };
let updatedUser = { ...user, ...extra };
console.log(updatedUser);
console.log("--------------------");

// 6) Overriding Object Properties
console.log("6) Overriding Object Properties");
let modified = { ...user, age: 30 };
console.log(modified);
console.log("--------------------");

// 7) Safe Array Modification
console.log("7) Safe Array Modification");
let nums = [10, 20, 30];
let reversed = [...nums].reverse();
console.log(nums);     
console.log(reversed); 
console.log("--------------------");

// 8) Converting String to Array
console.log("8) Converting String to Array");
let str = "JS";
let chars = [...str];
console.log(chars);
 