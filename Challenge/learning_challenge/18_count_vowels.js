/* 
=============================================================
CHALLENGE 1 — COUNT VOWELS IN A STRING
Write a function countVowels(str) that returns how many vowels
(a, e, i, o, u) are present in the given string (case-insensitive).

Data:
  let text = "JavaScript is Awesome";

Goal:
  - Convert to lowercase
  - Loop through characters
  - Count vowels
=============================================================
*/

// ---------- WRITE YOUR CODE BELOW ----------

// Example idea:
// function countVowels(str) { ... }
// let result = countVowels(text);
// console.log("Vowel count:", result);

let text = "JavaScript is Awesome";
function countVowels(str){
    let count =0;
    let vowels="aeiouAEIOU";
    for (let letter of text)
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