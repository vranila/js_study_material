// ===============================
// ARRAY DESTRUCTURING
// ===============================

let numbers = [10, 20, 30];

let [a, b, c] = numbers;
console.log(a, b, c);

// Skip values
let [x, , z] = numbers;
console.log(x,z);

// Default values
let [p = 0, q = 0, r = 0, s = 100] = numbers;
console.log(p,q,r,s);

// ===============================
// OBJECT DESTRUCTURING
// ===============================

let user = {
  username: "john",
  age: 25
};

let { username, age } = user;
console.log(username, age);

// Rename
let { username: name } = user;
console.log(name, age);

// Default value
let { city = "Mumbai" } = user;
console.log(name, age,city);
console.log(user)


// Nested destructuring
let data = {
  id: 1,
  address: {
    state: "UP"
  }
};

let { address: { state } } = data;

console.log(data.id);
console.log(data.address);
console.log(state);
