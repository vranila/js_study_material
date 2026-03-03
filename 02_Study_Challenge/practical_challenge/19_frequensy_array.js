let arr=[1,2,3,4,1];
let result = {};
for (let i = 0; i < arr.length; i++) 
{
    if (result[arr[i]]) 
    {
      result[arr[i]]++;
    } 
    else 
      {
      result[arr[i]] = 1;
    }
}
console.log(result);
