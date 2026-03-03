// Object Creation (Object Literal)co
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York",

  // Method
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person);
/* {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  city: 'New York',
  fullName: [Function: fullName]   ---> Node.js shows functions like this inside objects.
  It does NOT execute the function automatically.
  It just displays that the property contains a function.
} */


// Access properties
console.log(person["age"]);
console.log(person.firstName);
console.log(person.fullName());



// Add property
person.city = "Delhi";
console.log(person);
console.log(" ");


// Update property
person.age = 23;
console.log(person);
console.log(" ");


// Delete property
delete person.isStudent;
console.log(person);
console.log(" ");



// Check if Property Exists
console.log("age" in person);
console.log("city" in person);
console.log(" ");



// Nested Object
const student = {
  name: "Anila",
  marks: {
    math: 90,
    science: 85
  }
};
console.log(student.marks.math);
console.log(" ");


//Loop Through Object (for...in)
for (let key in person) {
  console.log(key + ":", person[key]);
}
console.log(" ");



//json stringfy
console.log(JSON.stringify(person));
console.log(" ");



// this Keyword Example
const user1 = {
  name: "Alice",
  greet: function () {
    return "Hello " + this.name;
  }
};
const user2 = {
  name: "Bob",
  greet: function () {
    return "Hello " + this.name;
  }
};
console.log(user1.greet());
console.log(user2.greet());
console.log(" ");



// Constructor Function
function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}



// Create Objects
const p1 = new Person("John", "Doe", 40);
const p2 = new Person("Anna", "Smith", 28);
console.log(p1);
console.log(p2);
console.log(" ");
// Add Property Using Prototype
Person.prototype.country = "India";
// Add Method Using Prototype
Person.prototype.getDetails = function () {
  return this.firstName + " " + this.lastName + " (" + this.age + ")";
};
console.log(p1.country);
console.log(p2.getDetails());



let obj = {
  a: 1,
  b: 2,
  c: 3
};

// ===============================
// COMMON OBJECT METHODS
// ===============================

// Object.keys()
console.log(Object.keys(obj)); 
// Returns all property names (["a","b","c"])

// Object.values()
console.log(Object.values(obj)); 
// Used to extract only the values (1,2,3) from the object for iteration, calculations, or display

// Object.entries()
console.log(Object.entries(obj)); 
// Returns key-value pairs as nested arrays

// Object.assign()
let newObj = Object.assign({}, obj); 
// Creates a shallow copy of the object

// Spread copy
let copy = { ...obj }; 
// Creates a shallow clone using spread operator

// hasOwnProperty()
console.log(obj.hasOwnProperty("a")); 
// Checks if property exists directly in object

// Object.freeze()
Object.freeze(obj); 
// Prevents modification (immutable object)

// Object.seal()
Object.seal(obj); 
// Prevents adding/removing properties but allows value modification

// Object.fromEntries()
let arr = [["x", 10], ["y", 20]];
console.log(Object.fromEntries(arr)); 
// Converts key-value array pairs into an object
