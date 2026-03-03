/*
Arithematic Operators
*/
console.log("-----------------------------Arithematic Operators-------------------------------");
let x = 10;
let y = 20;
console.log(x + y);  
console.log(x - y);   
console.log(x * y);   
console.log(y / x);   
console.log(y % x);   
x++;
console.log(x);       
x--;
console.log(x);      


/*String Addition */
console.log("a" + 10);

console.log(" ");

/*Comparison Operators*/
console.log("-------------------------------Comparison Operators");
let a = 10;
let b = 20;
console.log(a == b);    
console.log(a != b);    
console.log(a === b);   //checks both the value and the type of the operands
console.log(a !== b);   //checks if the two values being compared are not equal in either value or data type
console.log(a > b);     
console.log(a < b);     
console.log(a >= b);    
console.log(a <= b);    

console.log(" ");

/*Logical  Operators*/
console.log("-------------------------------Logical  Operators");
let x3 = 10;
let y3= 0;
console.log(x3 && y3);   
console.log(x3 || y3);   
console.log(!x3);       

console.log(" ");

/*Bitwise   Operators*/
console.log("-------------------------------Bitwise   Operators");
let x4 = 2;  
let y4= 3;  
console.log(x4 & y4);    
console.log(x4 | y4);    
console.log(x4 ^ y4);    
console.log(~y4);      
console.log(x4 << 1);   
console.log(x4 >> 1);   
console.log(x4 >>> 1);  


console.log(" ");


/*Assignment    Operators*/
console.log("-------------------------------Assignment  Operators-------------------------------");
let z = 10;
z += 5;
console.log(z);  
z -= 3;
console.log(z); 
z *= 2;
console.log(z); 
z /= 4;
console.log(z);  
z %= 4;
console.log(z);  


console.log(" ");


console.log("-------------------------------Conditional Operator (? :)-------------------------------");
let age = 18;
let result1 = (age >= 18) ? "Eligible" : "Not Eligible";
console.log(result1);


console.log(" ");

console.log("-------------------------------typeof Operator-------------------------------");
console.log(typeof 10);        
console.log(typeof "Hello");   

console.log(" ");

console.log("-------------------------------Nullish Coalescing Operator (??)-------------------------------");//It returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand
let value = null;
console.log(value ?? "Default"); 

console.log(" ");

console.log("-------------------------------delete Operator-------------------------------");
let obj = { name: "JS", version: "ES6" };
delete obj.version;
console.log(obj); 

console.log(" ");

console.log("-------------------------------Comma Operator-------------------------------");//It evaluates its operands (from left to right) and returns the value of the last operand.
let result = (1, 2, 3);
console.log(result); 

console.log(" ");

console.log("-------------------------------Grouping Operator ( )-------------------------------");
console.log((5 + 3) * 2); 

console.log(" ");

console.log("-------------------------------Spread Operator (...)-------------------------------");
let arr = [1, 2, 3];
let newArr = [...arr, 4, 5];
console.log(newArr); 

console.log(" ");

console.log("-------------------------------Exponentiation Operator (**)-------------------------------");
console.log(2 ** 3); 

console.log(" ");

console.log("-------------------------------yield Operator (Generator)-------------------------------");
function* demo() {
  yield 1;
  yield 2;
}
let gen = demo();
console.log(gen.next().value);
