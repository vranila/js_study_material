/* Modules allow you to split code into multiple files and reuse them.

JavaScript uses export and import. */

//file   --- math.js
export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

//module.js
import { add, multiply } from "./math.js";

console.log(add(5, 3));
console.log(multiply(4, 2));