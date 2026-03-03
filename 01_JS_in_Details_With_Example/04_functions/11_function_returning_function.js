
// Function Returning Function
console.log(" Function Returning Function ");
function outer() {
    return function inner() {
        console.log("Inner Function");
    };
}
outer()();
console.log("\n");



// Closures
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();