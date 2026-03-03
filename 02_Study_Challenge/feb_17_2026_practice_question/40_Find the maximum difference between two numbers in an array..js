function maxDiff(arr)
{
    let min=arr[0]
    let maxDiff=0;
    for(let i=1;i<arr.length;i++)
    {
        maxDiff=Math.max(maxDiff,arr[i]-min);
        min=Math.min(min,arr[i]);
    }
    return maxDiff;
}

let arr=[1,2,3]
console.log(maxDiff(arr));