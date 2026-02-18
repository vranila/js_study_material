//using array
let text ="javascript";
let newtext=[];
for (let i = text.length - 1  ; i >= 0 ; i--)
{
  newtext.push(text[i])
}
console.log(newtext.join(""));

// using string

let str2="java";
let reversedstring1="";
for(let i = str2.length -1 ;i>=0 ;i--)
{
    reversedstring1+= str2[i];
   
}
 console.log(reversedstring1);