/* What is return?
return sends value back to caller. */

//Function with Return Value
console.log("Function with Return Value");
function add(a,b)
{
    return a+b;
}
//calling of function
let a=10;
let b=10;
let result = add(a,b);
console.log("Sum of the 2 values is : "+result);
console.log("\n");


console.log("Without return");
function test() {
  console.log("Hello");
}
let value = test();
console.log(value); // undefined

console.log("\n");


console.log("Early Return");
function checkAge(age) {
  if (age < 18) {
    return "Minor";
  }
  return "Adult";
}
console.log(checkAge(16));


