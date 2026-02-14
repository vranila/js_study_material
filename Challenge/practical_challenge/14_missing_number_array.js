let arr = [1, 2, 4, 5,7,9];
let n = 10;
for(let i=0; i<n ;i++)
{
    let found=false;
    for(let j=0 ; j < arr.length;j++)
    { 
        if(arr[j]== i)
        {
            found =true;
            break;
        }

    }

     if (!found) {
        console.log("Missing Number =", i);
    }
}