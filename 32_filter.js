/* 
=============================================================
UNDERSTANDING .filter() — BEGINNER FRIENDLY EXPLANATION
=============================================================

.filter() is used to PICK certain elements from an array based
on a TRUE/FALSE condition.

Think of it like:
  "Give me only the items that match this rule."

🔹 What does filter() do?
---------------------------------
- It loops through the array
- It checks each value with a condition
- If the condition returns TRUE → value is kept
- If FALSE → value is removed
- Returns a NEW array
- Does NOT modify the original array

🔹 Syntax breakdown:
---------------------------------

let newArray = oldArray.filter((value, index, array) => {
    return true or false;  
});

If your function returns TRUE → keep the element  
If FALSE → skip the element  

=============================================================
*/


// -------------------------------------------------------------
// 🟦 1️⃣ Example: Filter even numbers
// -------------------------------------------------------------

let numbers = [1, 2, 3, 4, 5, 6];

let evens = numbers.filter(num => {
  return num % 2 === 0;   // TRUE only for even numbers
});

console.log("Even numbers:", evens);
// Output: [2, 4, 6]

// Single line
// let evens = numbers.filter(number => number % 2 === 0);


// -------------------------------------------------------------
// 🟩 2️⃣ Example: Filter numbers greater than 10
// -------------------------------------------------------------

let nums = [5, 12, 3, 25, 100, 7];

let greaterThan10 = nums.filter(n => n > 10);

console.log("Greater than 10:", greaterThan10);
// Output: [12, 25, 100]


// -------------------------------------------------------------
// 🟨 3️⃣ Original array remains unchanged
// -------------------------------------------------------------
console.log("Original nums:", nums);
// Output: [5, 12, 3, 25, 100, 7]


// -------------------------------------------------------------
// 🟧 4️⃣ Example: Filtering Objects
// VERY IMPORTANT for real-world JavaScript
// -------------------------------------------------------------

let students = [
  { name: "Arun", age: 20 },
  { name: "Anila", age: 17 },
  { name: "Akhil", age: 22 },
  { name: "Gayatri", age: 9 }
];

// Keep only adults
let adults = students.filter(s => s.age >= 18);

console.log("Adult students:", adults);

/*
Output:
[
  { name: 'Arun', age: 20 },
  { name: 'Akhil', age: 22 }
]
*/


// -------------------------------------------------------------
// 🟥 5️⃣ More object filtering: names starting with "G"
// -------------------------------------------------------------

let namesStartingWithG = students.filter(student => student.name.startsWith("G"))

console.log("Names starting with G:", namesStartingWithG);

/*
Output:  Names starting with G: [ { name: 'Gayatri', age: 15 } ]
*/


/*
=============================================================
SUMMARY
=============================================================

Use .filter() when you want:
  ✔ Only even numbers
  ✔ Only students above 18
  ✔ Only active users
  ✔ Only items in stock
  ✔ Only values matching a rule

.map() transforms values  
.filter() selects values  

Next Methods:
  - .find() → returns the FIRST matching value
  - .some() → returns TRUE/FALSE if ANY match
  - .every() → TRUE/FALSE if ALL match
  - .reduce() → adds/combines array into ONE value

=============================================================
*/