/* 
-------------------------------------------------------------
CHALLENGE 1 — BASIC OBJECT ACCESS
Create an object `car` with properties:
  brand, model, year, and color.

1️⃣ Print each property.
2️⃣ Change the color.
3️⃣ Add a new property `fuelType`.
-------------------------------------------------------------
*/

let car = { brand : "Swift" , model:"LXi" , year:2024 ,color : "blue"};
console.log("Brand",car.brand);
console.log("Model",car.model);
console.log("Year",car.year);
console.log("Color",car.color);
console.log("---------------------------------------------------------------------");
car.color="red";
console.log(car);
console.log("---------------------------------------------------------------------");
car.fueltype = "Petrol";
console.log(car);