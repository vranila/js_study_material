console.log("-----------------------Output in Node--------------------------")
console.log("Hello World");
console.error("Error message");
console.warn("Warning message");

console.log("-----------------------Input in Node--------------------------")
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", function(name) {
  console.log("Hello " + name);
  rl.close();
});
