/* In JavaScript, every object has a prototype which allows objects to inherit properties and methods. */

function Person(name) {
    this.name = name;
}

// Adding method using prototype
Person.prototype.sayHello = function () {
    console.log("Hello, my name is " + this.name);
};

let p1 = new Person("John");
let p2 = new Person("Alice");

p1.sayHello();
p2.sayHello();