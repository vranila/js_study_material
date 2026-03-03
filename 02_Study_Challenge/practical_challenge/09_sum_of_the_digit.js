let digit = 231;
let sum=0;

while(digit>0)
{
    let num = digit %10
    sum= sum+num;
    digit= parseInt(digit/10);
}

console.log("Sum of digits =", sum);