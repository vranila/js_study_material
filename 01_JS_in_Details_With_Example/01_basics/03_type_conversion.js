console.log("-----------------------Implicit Type Conversion (Coercion)--------------------------")
console.log("5" + 2);  // "52"
console.log("5" - 2);  // 3

/* Explanation:
+ converts to string
- converts to number */

console.log("-----------------------Explicit Type Conversion --------------------------")
console.log("----------STRING TO NUMBER------------")
let num = "100";
console.log(Number(num));     // 100
console.log(parseInt(num));   // 100


console.log("----------NUMBER TO STRING------------")
let value = 50;
console.log(String(value));   // "50"


console.log("----------Boolean Conversion------------")
console.log(Boolean(1));    // true
console.log(Boolean(0));    // false
console.log(Boolean(""));   // false



/*
type conversion
implicit conversion(done automatically)
explicit conversion(done manually using built in functions)
*/

//implicit
//string conversion
a= 10+"24";
console.log(a);

//number conversion
a= "10"-24;
b=10/5;
c="100"*true
console.log(a,b,c);

//boolean conversion
a= !!0;
b=!!1;
c=!!"";
d=!!"HI"
console.log(a,b,c,d);


//explicit
//tostring
let num1 =100;
let notnulldefined=String(null)
console.log(num.toString(),notnulldefined.toString());


//tonumber
let anum= Number("100");
let bnum=parseInt("100");
let cnum=parseFloat("10.5")+"200";
console.log(anum,bnum,cnum);


//toboolean
let abool=Boolean(0)  ;      
let bbool=Boolean("")       // false
let cbool=Boolean("Hello")  // true
console.log(abool,bbool,cbool);


// date conversion 
// date -> number
let date = new Date();
let value0 = date.getTime();
console.log(date, value0);

let value1 = Date.now();
console.log(value1);


let value2 = Number(new Date());
console.log(value2);

//date-> string 
let date1 = new Date();
console.log(String(date1));








