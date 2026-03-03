console.log("Iterating Object Properties");
let car = {
    brand: "OD",
    model: "Q7",
    color: "Black"
};
for (let key in car) {
    console.log(key + " -> " + car[key]);
}


console.log("for...in with String");
let str = "Hello";
for (let key in str) {
    console.log(key + " -> " + str[key]);
}

console.log("for...in with Array");
let arr = ["Hi", "Hello", 900, true];
for (let index in arr) {
    console.log(index + " -> " + arr[index]);
}


console.log("Updating Object Values using for...in");

let user = {
    name: "Anila",
    role: "Developer",
    active: true
};
for (let key in user) {
    user[key] = null;
}
console.log(user);
