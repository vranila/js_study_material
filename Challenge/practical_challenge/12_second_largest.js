function secondLargest(arr) {
  let largest = 0;
  let second = 0;

  for (let i = 0; i < arr.length; i++) 
  {
    if (arr[i] > largest) 
    {
      second = largest;
      largest = arr[i];
    } 
    else if (arr[i] > second && arr[i] != largest) 
    {
      second = arr[i];
    }
  }
  return second;
}


let arr = [10,9,6,8];
let result1 = secondLargest(arr);
console.log(result1);