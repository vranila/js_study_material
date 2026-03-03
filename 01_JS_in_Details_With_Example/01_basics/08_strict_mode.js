/* What is Strict Mode?

Strict mode helps write secure JavaScript by preventing bad practices.

Enable:

"use strict"; */


console.log("-------------------------------Example 1 – Prevent Undeclared Variables-------------------------------");

console.log("-------------------------------Without strict mode-------------------------------");

x = 10;
console.log(x);  // Works (bad practice)

console.log("-------------------------------With strict mode:-------------------------------");

"use strict";
x = 10;  // ❌ Error


console.log("-------------------------------Example 2 – Duplicate Parameter Error-------------------------------");
"use strict";

function test(a, a) {
  return a;
}

//This throws error in strict mode.


console.log("-------------------------------Example 3 – Silent Errors Become Visible-------------------------------");
"use strict";

let obj = {};
Object.defineProperty(obj, "x", { value: 10, writable: false });

obj.x = 20;  // ❌ Error in strict mode