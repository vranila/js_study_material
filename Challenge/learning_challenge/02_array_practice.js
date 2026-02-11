/* 
-------------------------------------------------------------
ARRAY PRACTICE – LEVEL 2
Learn how to combine loops, conditions, and array methods.
We'll:
1. Filter numbers above a certain value.
2. Reverse and sort arrays.
3. Merge two arrays.
4. Find min/max values manually.
-------------------------------------------------------------
*/

let num=[10,2,40,7,1];

console.log("Filter");
let result = num.filter(
    function(num)
    {
        return num>7;
    }
);
console.log(result);
console.log("------------------------------------");
console.log("                                    ");

console.log("Reverse and sort arrays");
let reversed  = num.reverse();
console.log("Reversed : ", reversed );
let sorting=reversed.sort((a,b) => a-b);
console.log("Sorted array: ",sorting);
console.log("------------------------------------");
console.log("                                    ");

console.log("Merge two arrays");
let num2=[5,6,17];
let merged  = [...num,...num2];
console.log("Merged array : ", merged );
console.log("------------------------------------");
console.log("                                    ");

console.log("Max /Min from arrays");
let max=num[0];
let min=num[0];
for (let n of num)
{
    if (n > max)
        max = n;
    if (n < min ) 
        min = n ;
}
console.log("Max value in array : ", max );
console.log("Min value in array : ", min );
console.log("------------------------------------");
console.log("                                    ");