let num=153;
let sum = 0;
let temp = num;
let digits = String(num).length;

while (temp > 0) 
{
    let rem = temp % 10;
    sum += rem ** digits;
    temp = Math.floor(temp / 10);
}
console.log( sum === num);

