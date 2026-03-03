/* 
-------------------------------------------------------------
REAL-WORLD PRACTICE — SHOPPING CART SYSTEM 🛒

Goal:
Simulate a small shopping cart using arrays & objects.

Concepts covered:
- Arrays inside objects
- Loops (for...of)
- Conditionals
- Calculations (sum, discount, total)
-------------------------------------------------------------
*/

let shoppingcart = [
  { name: "Laptop", price: 80000, quantity: 1 },
  { name: "Mouse", price: 1200, quantity: 2 },
  { name: "Keyboard", price: 2500, quantity: 1 },
  { name: "Headphones", price: 3000, quantity: 3 }
];
let subtottal=0;
//Array Inside Object
console.log("Array Inside Object");
console.log("**********************************");
for (let index of shoppingcart)
{
    console.log("Name of the item : " + index.name +  " Price of the item : " + index.price + " Quantity of the item : " + index.quantity + "\n");
}

console.log("---------------------------------------------------------------------------------");

//Display each item 
console.log("Display each item ");
console.log("**********************************");
for (let index of shoppingcart)
{
  if(index.price >3000)
  {
    console.log("Name of the item : " + index.name);
  }
   
}
console.log("---------------------------------------------------------------------------------");


//Calculate total cart value
console.log(" Calculate total cart value");
console.log("**********************************");
for (let index of shoppingcart)
{
  let individual_total=index.price * index.quantity;
  subtottal = subtottal + individual_total;
  console.log("Name of the item : " + index.name + "and " + " Quantity of the item : " + index.quantity + " Price of the item in total : " + individual_total );
}
console.log("Sum of the all item " + subtottal);
console.log("---------------------------------------------------------------------------------");



 // Apply discount if total > 5000 and give 20 % discount
console.log(" Apply discount if total > 5000 and give 20 % discount");
console.log("**********************************");
 let discount = 0;
 if(subtottal>5000)
 {
   discount=subtottal*0.2;
 }
 subtottal=subtottal-discount;
console.log("Discount Amount : " + discount);
console.log("Payable Anount : " + subtottal);