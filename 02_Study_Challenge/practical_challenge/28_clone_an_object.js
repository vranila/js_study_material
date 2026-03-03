let obj1 = { name: "Anila", age: 25 };
let obj2 = { ...obj1 };
console.log(obj2);

//using loop
let obj3 = { name: "Anila", age: 25 };
let obj4 = {};

for (let key in obj3) {
    obj4[key] = obj3[key];
}

console.log(obj4);
