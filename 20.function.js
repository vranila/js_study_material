//Function Declaration
console.log("Function Declaration");
function hello()
{
    console.log("hi js");
}
//calling of function
hello();
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



//Default Parameters
console.log("Default Parameters");
function multiply(a, b = 2) {
  return a * b;  
}
console.log(multiply(5));     
console.log(multiply(5, 3)); 
console.log("\n");


// Function Expression
console.log("Function Expression");
const sub = function (a, b) {
    return a - b;
};
console.log(sub(20, 5));
console.log("\n");


// Arrow Function
console.log("Arrow Function ");
const square = (n) => n * n;
console.log(square(6));
console.log("\n");


// Named Function Expression
console.log(" Named Function Expression  ");
const sum = function addNumbers(x, y) {
    return x + y;
};
console.log(sum(3, 7));
console.log("\n");



// Immediately Invoked Function Expression (IIFE)
console.log(" Immediately Invoked Function Expression (IIFE)");
(function () {
    console.log("IIFE Executed");
})();
console.log("\n");


// Function as Argument
console.log(" Function as Argument  ");
function operate(a, b, callback) {
    console.log(callback(a, b));
}
operate(10, 5, function (x, y) {
    return x * y;
});
console.log("\n");


// Function Returning Function
console.log(" Function Returning Function ");
function outer() {
    return function inner() {
        console.log("Inner Function");
    };
}
outer()();
console.log("\n");



// Arguments Object
console.log(" Arguments Object");
function showArgs() {
    console.log(arguments);
}
showArgs(1, 2, 3, 4);
console.log("\n");



// Pass by Value
console.log("  Pass by Value");
function updateValue(x) {
    x = 100;
}
let num = 50;
updateValue(num);
console.log(num);
console.log("\n");



// Pass by Reference
console.log(" Pass by Reference ");
function updateObject(obj) {
    obj.name = "Anila";
}
let person = { name: "User" };
updateObject(person);
console.log(person.name);
console.log("\n");


// Default Parameters with Expression
console.log(" Default Parameters with Expression");
function calc(p = 2, q = p * 3) {
    console.log(p + q);
}
calc();
calc(4);



// Anonymous Function
console.log(" Anonymous Function ");
setTimeout(function () {
    console.log("Anonymous Function Executed");
}, 1000);
console.log("\n");