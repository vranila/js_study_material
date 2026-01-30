/*primitive Data Types 
1.string
2.number  - 1,2,3
3.null
4.boolean  - true or false
5.bigint    - 12345678
6.symbol
7.undefined
*/

let a="Anila";
let age=28;
let not=null;
let bol=true;
let big=1234567890;
let sym=Symbol("ph");
let notdefined;

console.log(a,age,not,bol,big,sym,notdefined);


/*
Non-Primitive (Reference) Data Type
Object – Stores data in key–value pairs
Array – Ordered list of values
Date – Date and time manipulation
*/ 

let fruits={name:"apple",color:"red"};
let arr=[1,2,3];
let today=new Date();

console.log(fruits,arr,today);

//data type checking  -  typeof
// typeof null - object will come -  (this is a known quirk in JavaScript)
console.log(typeof a,typeof age,typeof not,typeof bol,typeof big,typeof sym,typeof notdefined);
console.log(typeof fruits,typeof arr,typeof today);


// Example of variable reassignment
let score = 100;
console.log(score); // 100

score = 150; // valid reassignment
console.log(score); // 150

const pi = 3.14;
//pi = 3.14159; // invalid, will throw an error if uncommented
console.log(pi); // 3.14 


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
let num=String(100)
let notnulldefined=String(null)
console.log(num.toString(),notnulldefined.toString());


//tonumber
let anum= Number("100");
let bnum=parseInt("100");
let cnum=parseFloat("10.5")+"200";
console.log(anum,bnum,cnum);


//toboolean
let abool=Boolean(0)  ;      // false
let bbool=Boolean("")       // false
let cbool=Boolean("Hello")  // true
console.log(abool,bbool,cbool);


// date conversion 
// date -> number
let date = new Date();
let value = date.getTime();
console.log(date, value);

let value1 = Date.now();
console.log(value1);


let value2 = Number(new Date());
console.log(value2);

//date-> string 
let date1 = new Date();
console.log(String(date1));