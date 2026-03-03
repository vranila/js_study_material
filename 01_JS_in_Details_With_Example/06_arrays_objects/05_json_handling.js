// ===============================
// JSON.stringify()
// ===============================

let obj = {
  name: "Anila",
  age: 22
};

let jsonString = JSON.stringify(obj);
console.log(jsonString);

// Pretty print
console.log(JSON.stringify(obj, null, 2));

// ===============================
// JSON.parse()
// ===============================

let parsed = JSON.parse(jsonString);
console.log(parsed);

// Reviver function
let revived = JSON.parse(jsonString, (key, value) => {
  if (key === "age") return value + 1;
  return value;
});

console.log(revived);