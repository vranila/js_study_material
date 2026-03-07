/* Classes in JavaScript are syntactic sugar over prototypes and are used to create objects. */

class Car {

    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(this.brand + " car started");
    }

}

let car1 = new Car("Toyota");
car1.start();



//inheritance exmaple

class ElectricCar extends Car {

    charge() {
        console.log("Charging battery...");
    }

}

let tesla = new ElectricCar("Tesla");
tesla.start();
tesla.charge();