/* Scope defines where a variable can be accessed in a program.

Types of scope:

Global Scope

Function Scope

Block Scope */


// Global Scope
let globalVar = "I am global";

function showGlobal() {
    console.log(globalVar); // accessible everywhere
}

showGlobal();

// Function Scope
function testFunction() {
    let message = "Inside function";
    console.log(message);
}

testFunction();
// console.log(message); // Error: message not accessible outside

// Block Scope
{
    let blockVar = "Inside block";
    console.log(blockVar);
}

// console.log(blockVar); // Error