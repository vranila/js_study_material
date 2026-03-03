// constructor
let n = 100;
console.log(n.constructor);

// EPSILON
console.log(Number.EPSILON);

// isFinite()
console.log(Number.isFinite(100));
console.log(Number.isFinite(Infinity));

// isInteger()
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));

// isNaN()
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("NaN"));

// isSafeInteger()
console.log(Number.isSafeInteger(9007199254740991));

// MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER);

// MIN_SAFE_INTEGER
console.log(Number.MIN_SAFE_INTEGER);

// MAX_VALUE
console.log(Number.MAX_VALUE);

// MIN_VALUE
console.log(Number.MIN_VALUE);

// NaN
console.log(Number.NaN);

// NEGATIVE_INFINITY
console.log(Number.NEGATIVE_INFINITY);

// POSITIVE_INFINITY
console.log(Number.POSITIVE_INFINITY);

// parseFloat()
console.log(Number.parseFloat("10.75"));
console.log(Number.parseFloat("10.75abc"));

// parseInt()
console.log(Number.parseInt("100"));
console.log(Number.parseInt("100px"));

// prototype (adding custom method)
Number.prototype.double = function () {
    return this * 2;
};
console.log((10).double());

// toExponential()
let num = 12345;
console.log(num.toExponential(2));

// toFixed()
let price = 99.4567;
console.log(price.toFixed(2));

// toLocaleString()
let amount = 1000000;
console.log(amount.toLocaleString("en-IN"));
console.log(amount.toLocaleString("en-US"));

// toPrecision()
let x = 12.34567;
console.log(x.toPrecision(4));

// toString()
let y = 255;
console.log(y.toString());
console.log(y.toString(16));

// valueOf()
let obj = new Number(500);
console.log(obj.valueOf());
