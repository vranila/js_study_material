function fact(num)
{
    if( num === 0 || num ===  1)
    {
        return 1;
    }
    return num * fact(num-1);
}

let n=5;
console.log(fact(n));