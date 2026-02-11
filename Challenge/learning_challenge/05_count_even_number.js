/* 
-------------------------------------------------------------
CHALLENGE 2 — COUNT EVEN NUMBERS
Write a function `countEven(arr)` that counts how many numbers
in the array are even.
-------------------------------------------------------------
*/


let count=0, total =0;
function countEven(num){
    for (let n of num)
    {
        if (n % 2 === 0)
        {
            total=total + n;
            count = count +1 ;
        } 
    }
     return total,count;
}

let num=[1,2,3,4];
countEven(num);
console.log("The count of even number in array : ", count);
console.log("The sum of the even array : ",total);
