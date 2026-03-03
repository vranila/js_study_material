/*
=============================================================
JAVASCRIPT CLASSES – ALL EXAMPLES TOGETHER
=============================================================
*/

// -------------------------------------------------------------
// JS Classes
console.log("JS Classes");

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  display() {
    console.log("Name:", this.name, "Age:", this.age);
  }
}

let s1 = new Student("Anila", 22);
s1.display();

// -------------------------------------------------------------
// JS Class Inheritance
console.log("\nJS Class Inheritance");

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello,", this.name);
  }
}

class Employee extends Person {
  constructor(name, role) {
    super(name);
    this.role = role;
  }

  showRole() {
    console.log("Role:", this.role);
  }
}

let emp1 = new Employee("Rahul", "Developer");
emp1.greet();
emp1.showRole();

// -------------------------------------------------------------
// JS Class Static
console.log("\nJS Class Static");

class MathUtil {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

console.log("Addition:", MathUtil.add(10, 20));
console.log("Multiplication:", MathUtil.multiply(5, 4));
