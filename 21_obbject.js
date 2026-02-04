// Object Creation (Object Literal)
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
console.log(person.firstName);
console.log(person["age"]);
console.log(person.fullName());

console.log(" ");

// Add / Change / Delete Properties
person.nationality = "American";
person.age = 35;
delete person.city;

console.log(" ");
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

//  Display Object
console.log(Object.values(person));


console.log(" ");

console.log(Object.entries(person));


console.log(" ");


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
