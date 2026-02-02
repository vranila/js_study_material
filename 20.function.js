//Function Declaration
console.log("Function Declaration");
function hello()
{
    console.log("hello world");
}
//calling of function
hello();

console.log("\n");

//Function with Parameters
console.log("Function with parameters");
function hello(name)
{
    console.log("hello " + name);
}
//calling of function
hello("Anila");
hello("Arun");
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
function multiply(a, b = 2) {
  return a * b;  
}

console.log(multiply(5));     
console.log(multiply(5, 3)); 