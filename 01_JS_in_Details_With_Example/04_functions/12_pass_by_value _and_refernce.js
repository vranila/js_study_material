

// Pass by Value
console.log("  Pass by Value");
function updateValue(x) {
    x = 100;
}
let num = 50;
updateValue(num);
console.log(num);
console.log("\n");



// Pass by Reference
console.log(" Pass by Reference ");
function updateObject(obj) {
    obj.name = "Anila";
}
let person = { name: "User" };
updateObject(person);
console.log(person.name);
console.log("\n");