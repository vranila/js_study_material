/* Parameters vs Arguments
Parameter → variable in function definition
Argument → actual value passed
Extra arguments are ignored (unless handled). */

console.log("Multiple Parameters");
function add(a, b) {
  console.log(a + b);
}
add(10, 5);


console.log("\n");

console.log(" Missing Arguments");
function show(name) {
  console.log(name);
}
show();  // undefined

console.log("\n");

console.log("Extra Arguments");
function display(a, b) {
  console.log(a, b);
}

display(1, 2, 3, 4);  // 1 2

