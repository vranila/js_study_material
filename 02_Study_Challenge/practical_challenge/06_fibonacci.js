let a =0;
let b = 1;
let nth_term =10;

console.log(a);

for (let i = 3 ; i < 10 ; i ++)
{
    let c = a+b;
    console.log(c);
    a =b;
    b=c;
}