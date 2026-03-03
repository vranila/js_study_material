//Function Declaration vs Function Expression

//Function Declaration
console.log("Function Declaration");
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));


function hello()
{
    console.log("hi js");
}
//calling of function
hello();
console.log("\n");





//Function Expression

console.log("Function Expression");
const add1 = function(a, b) {
  return a + b;
};
console.log(add1(5, 3));


const sub = function (a, b) {
    return a - b;
};
console.log(sub(20, 5));
console.log("\n");



// Named Function Expression
console.log(" Named Function Expression  ");
const sum = function addNumbers(x, y) {
    return x + y;
};
console.log(sum(3, 7));
console.log("\n");




