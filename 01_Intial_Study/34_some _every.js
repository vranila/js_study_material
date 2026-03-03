/* 
=============================================================
UNDERSTANDING .some() & .every() — BEGINNER FRIENDLY GUIDE
=============================================================

These two methods check TRUE/FALSE conditions on arrays.

-------------------------------------------------------------
🔹 .some()
Returns TRUE if **at least ONE** element matches the condition.

Think:  
"Is ANY item valid?"

-------------------------------------------------------------
🔹 .every()
Returns TRUE only if **ALL** elements match the condition.

Think:  
"Are ALL items valid?"

Both return a **boolean**.

=============================================================
*/


// -------------------------------------------------------------
// 🟦 1️⃣ .some() — check if ANY number is even
// -------------------------------------------------------------

let numbers = [1, 3, 7, 10, 15];

let hasEven = numbers.some(num => num % 2 === 0);

console.log("Has even number?", hasEven);
// Output: true
// Why? → Because 10 is even



// -------------------------------------------------------------
// 🟩 2️⃣ .every() — check if ALL numbers are positive
// -------------------------------------------------------------

let values = [5, 12, 7, 25];

let allPositive = values.every(n => n > 0);

console.log("Are all numbers positive?", allPositive);
// Output: true



// -------------------------------------------------------------
// 🟨 3️⃣ Example: .every() fails when ONE item is invalid
// -------------------------------------------------------------

let marks = [90, 85, 70, -5];

let validMarks = marks.every(m => m >= 0);

console.log("Are all marks valid?", validMarks);
// Output: false (because -5 is invalid)



// -------------------------------------------------------------
// 🟧 4️⃣ Using .some() on OBJECTS
// -------------------------------------------------------------

let students = [
  { name: "Arun",  age: 20 },
  { name: "Anila", age: 16 },
  { name: "Vishnu", age: 22 }
];

// Is there ANY minor?
let anyMinor = students.some(s => s.age < 18);

console.log("Any minor student?", anyMinor);
// Output: true



// -------------------------------------------------------------
// 🟥 5️⃣ Using .every() on OBJECTS
// -------------------------------------------------------------

// Check if ALL students are adults
let allAdults = students.every(s => s.age >= 18);

console.log("All adults?", allAdults);
// Output: false



/* 
=============================================================
SUMMARY TABLE
=============================================================

| Method     | Returns | When TRUE?                             |
|------------|---------|-----------------------------------------|
| .some()    | boolean | If **at least 1** element matches       |
| .every()   | boolean | If **ALL** elements match              |

Use Cases:
-------------------------------------------------------------
.some()
✔ Any product out of stock?  
✔ Any user inactive?  
✔ Any mark failed?  
✔ Any notification unread?

.every()
✔ Are all values valid?  
✔ Are all users verified?  
✔ Do all numbers pass a condition?  

Next step:
👉 `.reduce()` — the most powerful method (sum, total, max, grouping)

=============================================================
*/