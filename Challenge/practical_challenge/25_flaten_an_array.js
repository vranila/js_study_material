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

//Array.prototype.flat() method. This method creates a new array with all sub-array elements concatenated into it recursively up to a specified depth
//you can check if a value is an array using the static method Array.isArray()