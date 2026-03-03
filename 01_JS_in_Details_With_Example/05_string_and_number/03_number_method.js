// ===============================
// COMMONLY USED (TOP PRIORITY)
// ===============================

// Basic number
let a = 10;
console.log(typeof a);

// Number() conversion
console.log(Number("100"));
console.log(Number(true));
console.log(Number(false));

// Unary plus (quick conversion)
console.log(+"200");

// parseInt() with radix
console.log(Number.parseInt("1010", 2));
console.log(Number.parseInt("FF", 16));

// parseFloat()
console.log(Number.parseFloat("10.75"));
console.log(Number.parseFloat("10.75abc"));

// toFixed()
let price = 99.4567;
console.log(price.toFixed(2));

// toPrecision()
let x = 12.34567;
console.log(x.toPrecision(4));

// toString() with base
let y = 255;
console.log(y.toString());
console.log(y.toString(16));
console.log(y.toString(2));

// toLocaleString()
let amount = 1000000;
console.log(amount.toLocaleString("en-IN"));
console.log(amount.toLocaleString("en-US"));
console.log(amount.toLocaleString("en-US", { style: "currency", currency: "USD" }));

// isNaN()
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("NaN"));

// isFinite()
console.log(Number.isFinite(100));
console.log(Number.isFinite(Infinity));

// isInteger()
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));

// ===============================
// YOUR ORIGINAL CONTENT
// ===============================

// constructor
let n = 100;
console.log(n.constructor);

// EPSILON
console.log(Number.EPSILON);

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

// prototype (adding custom method)
Number.prototype.double = function () {
    return this * 2;
};
console.log((10).double());

// toExponential()
let num = 12345;
console.log(num.toExponential(2));

// valueOf()
let obj = new Number(500);
console.log(obj.valueOf());

// ===============================
// ADDITIONAL COMMON & IMPORTANT
// ===============================

// Global isNaN vs Number.isNaN
console.log(isNaN("hello"));
console.log(Number.isNaN("hello"));

// Global isFinite vs Number.isFinite
console.log(isFinite("100"));
console.log(Number.isFinite("100"));

// Numeric separators
let billion = 1_000_000_000;
console.log(billion);

// Bitwise integer trick (32-bit conversion)
console.log(5.8 | 0);

// Safe integer boundary test
console.log(Number.isSafeInteger(9007199254740992));

// toJSON()
let num2 = 100;
console.log(JSON.stringify(num2));

// ===============================
// MATH RELATED (COMMON WITH NUMBERS)
// ===============================

console.log(Math.round(4.6));
console.log(Math.floor(4.6));
console.log(Math.ceil(4.2));
console.log(Math.trunc(4.9));

console.log(Math.max(10, 20, 30));
console.log(Math.min(10, 20, 30));

console.log(Math.random());

console.log(Math.pow(2, 3));
console.log(Math.sqrt(16));

console.log(Math.sign(-10));
console.log(Math.fround(1.337));

// ===============================
// SPECIAL CASES
// ===============================

// Floating precision issue
console.log(0.1 + 0.2);

// Infinity behavior
console.log(1 / 0);
console.log(-1 / 0);

// NaN comparison
console.log(NaN === NaN);

// BigInt
let big = 123456789012345678901234567890n;
console.log(typeof big);