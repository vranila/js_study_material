//Logical AND (&&)  - Returns true only if both conditions are true.
let age = 25;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Entry allowed");
}



/* Logical OR (||)

Returns true if at least one condition is true. */

let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("No work today");
}




/* Logical NOT (!)

Reverses boolean value. */

let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please login");
}


