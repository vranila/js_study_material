
/* 
=============================================================
CHALLENGE 6 — WORD FREQUENCY COUNTER
Given a sentence, count how many times each word appears.
Ignore case and punctuation (.,!?) for this simple version.

Data:
  let sentence = "JS is great, and JS is popular! JS";

Print:
  {
    js: 3,
    is: 2,
    great: 1,
    and: 1,
    popular: 1
  }
=============================================================
*/


let sentence = "JS is great, and JS is popular! JS";
sentence = sentence.toLowerCase();
sentence = sentence.replace(/[.,!?]/g, "" );
let words =sentence.split(" ");
let frequency = {};

for (let i =0 ; i<words.length ; i++ )
{
  let word = words[i];
  if (frequency[word]){
    frequency[word] = frequency[word ] + 1 ;
  }
  else{
     frequency[word] = 1 ;
  }

}

console.log(frequency);