/*Check whether a number is even or odd.
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function (num) {
  num = Number(num);
  let result = (num % 2 === 0) ? "Even" : "Odd";
  console.log("The number is", result);
  rl.close();
});
