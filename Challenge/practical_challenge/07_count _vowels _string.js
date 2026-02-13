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