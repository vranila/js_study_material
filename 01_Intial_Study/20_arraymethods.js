// push() → Add element(s) to the end
let arr1 = [10, 20];
arr1.push(30, 40);
console.log(arr1);

// pop() → Remove the last element
let arr3 = [1, 2, 3];
arr3.pop();
console.log(arr3);

// unshift() → Add element(s) to the beginning
let arr2 = [20, 30];
arr2.unshift(5, 10);
console.log(arr2);

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


// Original array
let numbers = [10, 15, 20, 25, 30];

// 1. forEach() – Print each element
console.log("Using forEach():");
numbers.forEach(function (num) {
    console.log(num);
});

// 2. map() – Increase each number by 5
let mappedArray = numbers.map(function (num) 
{
    return num + 5;
});
console.log("After map():", mappedArray);

// 3. filter() – Get numbers greater than 20
let filteredArray = mappedArray.filter(function (num) 
{
    return num > 20;
});
console.log("After filter():", filteredArray);

// 4. reduce() – Find sum of filtered numbers
let sum = filteredArray.reduce(function (total, num) 
{
    return total + num;
}, 0);

console.log("After reduce() (Sum):", sum);
