let arr=[1,2];
let array=[3,4,1];
let merge = arr.concat(array)
console.log(merge)


let arr3=[1,2,4];
let arr4=[3,4];
let intersection = arr3.filter(x=>arr4.includes(x));
console.log(intersection)

let arr1=[1,2];
let arr2=[3,4,1];
let union=[...arr1,...arr2];
console.log(... new Set (union))