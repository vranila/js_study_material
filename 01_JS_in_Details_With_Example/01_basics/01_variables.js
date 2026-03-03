/*What Are Variables?
A variable is a named storage location for data.

In JavaScript, we use:
var (old, function-scoped)
let (block-scoped)
const (block-scoped, cannot reassign) 

*/


console.log("-----------------------LET--------------------------")
let age1 = 25;
console.log(age1);

age1 = 30;
console.log(age1);

/* Explanation:
let allows reassignment.
Scope is limited to block { }. 
*/

console.log("-----------------------CONST--------------------------")
const country = "India";
console.log(country);
/* Explanation:
const cannot be reassigned.
Used for fixed values. */

console.log("-----------------------VAR--------------------------")
var x = 10;
console.log(x);


var a=10; 
let b=20; //modern changeable
const c=30; //constant

console.log(a,b,c);

a=11;
b=21
///c=31;//invalid
console.log(a,b);

