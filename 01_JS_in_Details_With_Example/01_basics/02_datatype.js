/*primitive Data Types 
1.string
2.number  - 1,2,3
3.null
4.boolean  - true or false
5.bigint    - 12345678
6.symbol
7.undefined


NULL type is object
*/
console.log("-----------------------Primitive--------------------------")

let name = "Anila";       // String
let age = 25;             // Number
let isStudent = true;     // Boolean
let data;                 // Undefined
let value = null;         // Null
console.log(name);  // string
console.log(age);      // number
console.log(isStudent);     // boolean
console.log(data); // Undefined
console.log(value)     // Null


let a="Anila";
let age1=28;
let not=null;
let bol=true;
let big=1234567890;
let sym=Symbol("ph");
let notdefined;

console.log(a,age1,not,bol,big,sym,notdefined);

console.log("---------------typeof------------------")
console.log(typeof "Hello");  // string
console.log(typeof 100);      // number
console.log(typeof true);     // boolean
console.log(typeof null);     // object (JavaScript bug)



/*
Non-Primitive (Reference) Data Type
Object – Stores data in key–value pairs
Array – Ordered list of values
Date – Date and time manipulation
*/ 


console.log("-----------------------Non - Primitive--------------------------")
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

