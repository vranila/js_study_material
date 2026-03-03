/* What Are Default Parameters?

Provide default value if argument is missing. */

//Example 1
function greet(name = "Guest") {
  console.log("Hello " + name);
}
greet("Anila");
greet();

console.log("\n");


console.log("Multiple Defaults");
function calculate(a = 0, b = 0) {
  return a + b;
}
console.log(calculate(5, 3));
console.log(calculate(5));

console.log("\n");


// Default Parameters with Expression
console.log("Default Parameters");
function multiply(a, b = 2) {
  return a * b;  
}
console.log(multiply(5));     
console.log(multiply(5, 3)); 


console.log("\n");


console.log(" Default Parameters with Expression");
function calc(p = 2, q = p * 3) {
    console.log(p + q);
}
calc();
calc(4);

console.log("\n");

//Function with Parameters
console.log("Function with parameters");
function hello1(name)
{
    console.log("hello " + name);
}
//calling of function
hello1("Anila");
hello1("Arun");
console.log("\n");
