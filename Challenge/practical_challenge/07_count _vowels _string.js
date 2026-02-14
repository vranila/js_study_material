let text = "Javascript";
let count = 0;
let vowels="aeiouAEIOU";

function countVowels(text)
{
    for(let letter of text)
    {
        if (vowels.includes(letter))
        {
            count ++;
        }
    }
    return count;
}

let result = countVowels(text);
console.log("Vowels in text is : ", result);


//OR



let str ="jave";
let vowles="aeiouAEIOU";
let count1 =0;
for (let i=0;i<str.length ;i++)
{
     if (vowles.includes(str[i]))
     {
        count1 ++;
     }

}
     console.log(count1);