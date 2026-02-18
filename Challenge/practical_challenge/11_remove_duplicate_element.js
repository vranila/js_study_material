let arr = [10,5,6,10];
function removedu(arr)
{
    let newarr=[];
    for (let i =0 ;i < arr.length ;i++)
    {
        if (!newarr.includes(arr[i]))
        {
            newarr.push(arr[i])
        }
    }
    return newarr;
}

let result1 = removedu(arr);
console.log(result1);



//using inbulit function


let arr1 = [10, 2, 3, 4, 10];
let result2 = [...new Set(arr1)];
console.log(result2);


//using inbulit function with fucntion call
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
let result = removeDuplicates(arr);
console.log(result);