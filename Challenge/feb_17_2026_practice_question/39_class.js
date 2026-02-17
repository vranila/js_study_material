class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a sound.");
  }
}

// Creating objects
let dog = new Animal("Dog");
let cat = new Animal("Cat");

// Calling method
dog.speak();
cat.speak();
