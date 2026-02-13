let text = "malayalam";
let reversedtext="";

for (let i = text.length - 1  ; i >= 0 ; i--)
{
  reversedtext= reversedtext + text[i];
}

if(reversedtext === text)
{
    console.log("String is Palindrome");
}
else {
    console.log("String is not  Palindrome");
}
