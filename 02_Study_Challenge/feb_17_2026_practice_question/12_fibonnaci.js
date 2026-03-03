let a =0;
let b =1;
let n =7;
console.log(a);
console.log(b);
for(let i = 0; i<n;i++)
{
    let c =a+b;
    a=b;
    b=c;
    console.log(c);
}