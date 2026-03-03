console.log("-----------------------Implicit Type Conversion (Coercion)--------------------------")
console.log("5" + 2);  // "52"
console.log("5" - 2);  // 3

/* Explanation:
+ converts to string
- converts to number */

console.log("-----------------------Explicit Type Conversion (Coercion)--------------------------")
console.log("----------STRING TO NUMBER------------")
let num = "100";
console.log(Number(num));     // 100
console.log(parseInt(num));   // 100


console.log("----------NUMBER TO STRING------------")
let value = 50;
console.log(String(value));   // "50"


console.log("----------Boolean Conversion------------")
console.log(Boolean(1));    // true
console.log(Boolean(0));    // false
console.log(Boolean(""));   // false