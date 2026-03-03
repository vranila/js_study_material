let str="javaj";
let palindrom="";

for (let i =str.length - 1;i >= 0;i--)
{
    palindrom = palindrom + str[i];

}


if(palindrom === str)
{
    console.log("palindorme");
}
else
    {
    console.log("not palindorme");

}