/* 
=============================================================
CHALLENGE 2 — SHOPPING CART TOTAL WITH DISCOUNTS
Given a cart (array of items), calculate:
  - Subtotal for each item (price * quantity)
  - Cart total
  - If quantity of an item > 2, apply 5% item-level discount
  - If total > 5000, apply additional 10% cart-level discount

Data:
  let cart = [
    { name: "Laptop", price: 80000, quantity: 1 },
    { name: "Mouse", price: 1200, quantity: 3 },
    { name: "Headphones", price: 3000, quantity: 2 }
  ];

Print:
  - Each line: "<name> x<qty> → ₹<subtotal after item discount>"
  - "Total before cart discount: ₹<amount>"
  - "Cart discount: ₹<amount>"
  - "Final total: ₹<amount>"
=============================================================
*/


let cart = [
  { name: "Laptop", price: 80000, quantity: 1 },
  { name: "Mouse", price: 1200, quantity: 3 },
  { name: "Headphones", price: 3000, quantity: 2 }
];


let subtottal=0;

//Calculate total cart value
for (let index of cart)
{

  let individual_total=index.price * index.quantity;

  if(index.quantity >2)
  {
     individual_total = individual_total - (individual_total * 0.05);
  }
    
  subtottal = subtottal + individual_total;
}


// Apply discount if total > 5000 and give 10 % discount
let discount = 0;
let totalBeforeCartDiscount = subtottal;
if(subtottal>5000)
{
  discount=subtottal*0.1;
}
subtottal=subtottal-discount;



console.log("------------------------------------------------------");
console.log("                    SHOPPING CART                     ");
console.log("------------------------------------------------------");
for (let index of cart)
{
  
  let individual_total = index.price * index.quantity;
  if(index.quantity > 2)
  {
    individual_total = individual_total - (individual_total * 0.05);
  }
  console.log(index.name + "(x" + index.quantity + ") " +  " -> " +     individual_total);
}
console.log("Total before cart discount :" + totalBeforeCartDiscount);
console.log("Cart discount: " + discount);
console.log("Final total : " + subtottal);
console.log("---------------------------------------------------------------------------------");
