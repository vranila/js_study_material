/* 
-------------------------------------------------------------
CHALLENGE 2 — LOOPING THROUGH AN OBJECT
Create an object `student` with keys:
  name, age, marks (array), and city.

1️⃣ Print each key and value using a `for...in` loop.
2️⃣ Use `Object.keys()` and `Object.values()` to print them as arrays.
-------------------------------------------------------------
*/
let student={
    name:"Anila",
    age:28,
    marks:[50,50,50],
    city:"Mumbai"
};

for (let key in student)
{
    console.log(key + " -> " + student[key]);
}

console.log("Keys : " , Object.keys(student));
console.log("Values : " , Object.values(student));

