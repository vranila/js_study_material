let arr=[143,45,76];
let result = [];

for (let i = 0; i < arr.length; i++) 
{
    if (Array.isArray(arr[i])) 
    {
      result = result.concat(flatten(arr[i]));
    } 
    else 
    {
      result.push(arr[i]);
    }
}
console.log( result);

