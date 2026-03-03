/* 
-------------------------------------------------------------
FOR...IN vs FOR...OF IN JAVASCRIPT
They look similar, but they do different things.

👉 for...in  → loops over the *keys / indexes*
👉 for...of  → loops over the *values*
-------------------------------------------------------------
*/

let student={
    name:"Anila",
    age:28,
    marks:[50,50,50],
    city:"Mumbai"
};
console.log("Example with an object");
console.log("*********************************");
console.log("Using for...in:");
for (let key in student)
{
    console.log(key + " -> " + student[key]);
}

console.log("                               ");
console.log("Using for...of: ");
// for (let key of student)
// {
//     console.log(key);
// }
console.log("Using for...of on object will cause an error");
console.log("----------------------------------");




// Example with an array
let fruits = ["apple", "banana", "cherry"];
console.log("Example with an array");
console.log("*********************************");
console.log("Using for...in:");
for (let index in fruits) {
  console.log(index, "→", fruits[index]);   // index + value
}
console.log("                               ");
console.log("Using for...of:");
for (let fruit of fruits) {
  console.log(fruit);                       // direct value
}
console.log("----------------------------------");



// Example with a string
let word = "Hi";
console.log("Example with string");
console.log("*********************************");
console.log("Using for...in:");
console.log("for...in → indexes:");
for (let i in word) {
  console.log(i);     // 0, 1
}

console.log("                               ");
console.log("Using for...of:");
console.log("for...of → values:");
for (let char of word) {
  console.log(char);  // H, i
}

console.log("----------------------------------");

/* 
Summary
| Structure | Works On | Loops Over | Example |
|------------|-----------|-------------|----------|
| for...in  | objects, arrays | keys / indexes | for (let key in obj) |
| for...of  | arrays, strings | values | for (let value of arr) |

Rule of thumb:
- Use **for...in** → when dealing with *object keys*
- Use **for...of** → when dealing with *array or string values*
*/