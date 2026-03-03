
// Variable Scope
let x = 10;
function testScope() {
    let x = 20;
    console.log(x);
}
testScope();
console.log(x);


// Global Variables
var globalVar = "I am global";
function showGlobal() {
    console.log(globalVar);
}
showGlobal();
