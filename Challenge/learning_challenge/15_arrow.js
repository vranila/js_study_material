

/* ============================================================
 FUNCTION EXPRESSION
-------------------------------------------------------------
A function stored inside a variable.
The function does NOT have a name.
It runs only when the variable is called.
============================================================ */

let greet = function() {
    console.log("Hello from Function Expression!");
};

greet();   // Calling the function


/* ============================================================
FUNCTION EXPRESSION WITH PARAMETERS
============================================================ */

let add = function(a, b) {
    return a + b;
};

let result = add(10, 20);
console.log("Sum:", result);


/* ============================================================
 ARROW FUNCTION (ES6)
-------------------------------------------------------------
Shorter syntax.
No need to write "function" keyword.
============================================================ */

let welcome = () => {
    console.log("Hello from Arrow Function!");
};

welcome();


/* ============================================================
 ARROW FUNCTION WITH PARAMETERS
============================================================ */

let multiply = (x, y) => {
    return x * y;
};

console.log("Multiplication:", multiply(5, 4));


/* ============================================================
SHORTER ARROW FUNCTION (Single Line)
-------------------------------------------------------------
If only one statement, return is automatic.
============================================================ */

let square = num => num * num;

console.log("Square:", square(6));


/* ============================================================
 FUNCTION AS ARGUMENT (Callback Example)
============================================================ */

function processNumber(number, operation) {
    return operation(number);
}

let double = n => n * 2;

console.log("Processed Value:", processNumber(5, double));


/* ============================================================
` FUNCTION RETURNING ANOTHER FUNCTION
============================================================ */

function outer() {
    return function() {
        console.log("I am returned from another function!");
    };
}

let inner = outer();
inner();
