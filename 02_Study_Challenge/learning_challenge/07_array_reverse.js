/* 
-------------------------------------------------------------
CHALLENGE 4 — REVERSE ARRAY (without using reverse())
Write a function `reverseArray(arr)` that returns a new array
with elements in reverse order.
-------------------------------------------------------------
*/

function reverseArray(arr)
{
    let reverarr=[];
    for(let i = arr.length - 1 ; i >= 0 ; i--)
    {
       reverarr.push(arr[i]);
    }
    console.log(reverarr);
}

let arr=[10,5,20,56];
reverseArray(arr);