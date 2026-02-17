let arr=[1,2,3,1];
let frequency={};

for(let i = 0 ; i<arr.length;i++)
{
    if(frequency[arr[i]])
    {
        frequency[arr[i]]++;
    }
    else{
        frequency[arr[i]]=1
    }
}

console.log(frequency)