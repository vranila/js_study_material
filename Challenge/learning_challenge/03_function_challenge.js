/* 
-------------------------------------------------------------
FUNCTION PRACTICE — BASIC FUNCTIONS
Goal:
1️⃣ Define and call functions.
2️⃣ Learn how to return values and use conditions inside functions.

Tasks:
1. Write a function `square(num)` that returns the square of a number.
2. Write a function `isEven(num)` that prints “Even” or “Odd”.
3. Call both functions for a few test numbers.
-------------------------------------------------------------
*/

let num;
function squ(num)
{
    return num * num ;
}
let result = squ(4);
console.log("Square of number ",result);


function oddeven(num)
{
    if (num % 2 == 0)
        console.log(num +  "  number is even");
    else 
        console.log(num +  "  number is odd");
}
oddeven(4);
oddeven(7);