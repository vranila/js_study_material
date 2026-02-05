// ===============================
// JAVASCRIPT DATE — ALL EXAMPLES
// ===============================

// 1) Creating Date Objects
console.log("1) Creating Date Objects");
console.log(new Date());
console.log(new Date("2022-03-25"));
console.log(new Date(2018, 11, 24, 10, 33, 30));
console.log(new Date(0));
console.log("--------------------");

// 2) Date from Milliseconds
console.log("2) Date from Milliseconds");
console.log(new Date(100000000000));
console.log(new Date(-100000000000));
console.log("--------------------");

// 3) Date Output Methods
console.log("3) Date Output Methods");
let d = new Date();
console.log(d.toString());
console.log(d.toDateString());
console.log(d.toUTCString());
console.log(d.toISOString());
console.log("--------------------");

// 4) Get Date Methods
console.log("4) Get Date Methods");
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getTime());
console.log("--------------------");

// 5) UTC Get Methods
console.log("5) UTC Get Methods");
console.log(d.getUTCFullYear());
console.log(d.getUTCMonth());
console.log(d.getUTCDate());
console.log(d.getUTCHours());
console.log(d.getUTCMinutes());
console.log(d.getUTCSeconds());
console.log("--------------------");

// 6) Date.now()
console.log("6) Date.now()");
console.log(Date.now());
console.log("--------------------");

// 7) Set Date Methods
console.log("7) Set Date Methods");
let d2 = new Date("January 01, 2025");
d2.setFullYear(2020);
console.log(d2);
d2.setMonth(11);
console.log(d2);
d2.setDate(15);
console.log(d2);
d2.setHours(22, 10, 20);
console.log(d2);
console.log("--------------------");

// 8) Comparing Dates
console.log("8) Comparing Dates");
let today = new Date();
let future = new Date();
future.setFullYear(2100, 0, 14);
console.log(future > today);
console.log("--------------------");

// 9) Date.parse()
console.log("9) Date.parse()");
let ms = Date.parse("March 21, 2012");
console.log(ms);
console.log(new Date(ms));
console.log("--------------------");

// 10) Locale Methods
console.log("10) Locale Methods");
console.log(d.toLocaleString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());
console.log("--------------------");

// 11) Timezone Offset
console.log("11) Timezone Offset");
console.log(d.getTimezoneOffset());
console.log("--------------------");
