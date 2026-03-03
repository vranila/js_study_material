let str = "programming";

let frequency = {};

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (frequency[ch]) {
        frequency[ch]++;
    } else {
        frequency[ch] = 1;
    }
}

console.log(frequency);

//or
let arr="javaj";
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



  

