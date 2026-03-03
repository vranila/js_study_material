// Function as Argument
console.log(" Function as Argument  ");
function operate(a, b, callback) {
    console.log(callback(a, b));
}
operate(10, 5, function (x, y) {
    return x * y;
});
console.log("\n");


// Arguments Object
console.log(" Arguments Object");
function showArgs() {
    console.log(arguments);
}
showArgs(1, 2, 3, 4);
console.log("\n");
