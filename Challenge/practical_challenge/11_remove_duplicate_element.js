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
function removeDuplicates(arr) {
  return [...new Set(arr)];
}


let result = removeDuplicates(arr);
console.log(result);