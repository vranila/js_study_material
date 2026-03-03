/* What is a Function?
A function is a reusable block of code that performs a specific task.
 
Explanation:
function greet() → defines function
greet() → calls function
Code inside runs only when called
*/


//Simple Function
function greet() {
  console.log("Hello, Welcome!");
}
greet();

console.log("\n");

//Function with Logic
function checkEven(number) {
  if (number % 2 === 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}

checkEven(10);
checkEven(7);