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


  

