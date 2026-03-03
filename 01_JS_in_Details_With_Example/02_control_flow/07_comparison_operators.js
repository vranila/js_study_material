/* Equality Operators
Explanation:

== → compares value only (type conversion happens)

=== → compares value + type (recommended) */
console.log(5 == "5");   // true
console.log(5 === "5");  // false



//Not Equal
console.log(10 != "10");   // false
console.log(10 !== "10");  // true


//Relational Operators
console.log(10 > 5);   // true
console.log(5 < 3);    // false
console.log(7 >= 7);   // true
console.log(4 <= 2);   // false




//Special Case – NaN
console.log(NaN == NaN);   // false
console.log(NaN === NaN);  // false



//real-world-example
let username = "Anila";
let password = "1234";

if (username === "Anila" && password === "1234") {
  console.log("Login successful");
} else {
  console.log("Invalid credentials");
}