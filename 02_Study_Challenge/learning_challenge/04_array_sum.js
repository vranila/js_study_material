/* 
-------------------------------------------------------------
CHALLENGE 1 — SUM OF ARRAY
Write a function `sumArray(arr)` that returns the total of all
numbers in an array.

Steps:
1️⃣ Create a variable to hold the total.
2️⃣ Loop through each number using `for...of`.
3️⃣ Add each number to the total.
4️⃣ Return the result.
-------------------------------------------------------------
*/

let num = [1,2,3];
let total =0;
for (let n of num){
    total = total + n;
}
console.log("Sum of the array : ",total);