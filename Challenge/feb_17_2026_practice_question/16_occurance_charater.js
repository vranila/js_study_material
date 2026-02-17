let arr="programming";
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


//OR

function countChar(str,char){
  return str.split(char).length-1;
}
