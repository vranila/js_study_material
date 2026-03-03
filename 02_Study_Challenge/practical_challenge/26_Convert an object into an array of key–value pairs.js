let obj={
    name:"Anila",
    age:"20"
}
let result = [];
for (let key in obj) 
{
    result.push([key, obj[key]]);
}
console.log(result);

