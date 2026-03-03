// ===============================
// COMMON ARRAY CREATION
// ===============================

let arr1 = [1, 2, 3];
let arr2 = new Array(4, 5, 6);

console.log(arr1);
console.log(arr2);

// length
console.log(arr1.length);

// Access elements
console.log(arr1[0]);
console.log(arr1[arr1.length - 1]);

// Modify element
arr1[1] = 10;
console.log(arr1);

// Check if array
console.log(Array.isArray(arr1));