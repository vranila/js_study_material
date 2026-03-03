let arr = [1, 2, 4, 5, 7, 9];
let arr2 = [1, 2, 3, 4];

let result = [...arr, ...arr2];
console.log("Merged:", result);

let unique = [...new Set(result)];
console.log("Unique:", unique);