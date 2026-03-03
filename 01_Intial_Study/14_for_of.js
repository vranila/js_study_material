console.log("for...of with Array");
let languages = ["JavaScript", "Python", "C", "HTML"];
for (let lang of languages) {
    console.log(lang);
}


console.log("for...of with String");
let word = "JavaScript";
for (let ch of word) {
    console.log(ch);
}

console.log("for...of with Set");
let nums = new Set([10, 20, 30, 30, 40]);
for (let num of nums) {
    console.log(num);
}

console.log("for...of with Map");
let map = new Map();
map.set("one", 1);
map.set("two", 2);
map.set("three", 3);
for (let [key, value] of map) {
    console.log(key + " -> " + value);
}
