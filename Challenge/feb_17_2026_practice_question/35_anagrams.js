let a="gum";
let b ="mug"
let result = (a,b) =>{
    return a.split("").sort().join("") === 
            b.split("").sort().join("");
}

console.log(result(a,b));