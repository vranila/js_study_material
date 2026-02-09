// Find the largest of three numbers.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a first number: ", function (num1)
{
    rl.question("Enter a second number: ", function (num2)
    {
        rl.question("Enter a third number: ", function (num3)
        {
            num1 = Number(num1);
            num2 = Number(num2);
            num3 = Number(num3);
            let result =
            (num1 >= num2 && num1 >= num3) ? "First number is the greatest. Value = " + num1 : (num2 >= num1 && num2 >= num3) ? "Second number is the greatest. Value = " + num2: "Third number is the greatest. Value = " + num3;

      console.log(result);
            rl.close();
        });
    });
}
);
