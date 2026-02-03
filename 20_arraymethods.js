// push() → Add element(s) to the end
let arr1 = [10, 20];
arr1.push(30, 40);
console.log(arr1);

// unshift() → Add element(s) to the beginning
let arr2 = [20, 30];
arr2.unshift(5, 10);
console.log(arr2);

// pop() → Remove the last element
let arr3 = [1, 2, 3];
arr3.pop();
console.log(arr3);

// shift() → Remove the first element
let arr4 = [10, 20, 30];
arr4.shift();
console.log(arr4);

// slice() → Extract part of an array
let arr5 = [100, 200, 300, 400];
let resultSlice = arr5.slice(1, 3);
console.log(resultSlice);

// splice() → Add / Remove elements
let arr6 = [1, 2, 3, 4];
arr6.splice(2, 1, 99);
console.log(arr6);

// indexOf()
let arr7 = ["a", "b", "c", "b"];
console.log(arr7.indexOf("b"));

// lastIndexOf()
console.log(arr7.lastIndexOf("b"));

// includes()
console.log(arr7.includes("c"));
console.log(arr7.includes("x"));

// length property
let arr8 = [5, 10, 15, 20];
console.log(arr8.length);
