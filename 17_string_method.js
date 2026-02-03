// String length
let str = "JavaScript";
console.log(str.length);

// charAt()
console.log(str.charAt(4));

// charCodeAt()
console.log(str.charCodeAt(0));

// codePointAt()
console.log("anila".codePointAt(0));

// concat()
console.log("Hello".concat(" ", "World"));

// at()
console.log(str.at(-1));

// Bracket notation
console.log(str[1]);

// slice()
console.log(str.slice(4, 10));

// substring()
console.log(str.substring(0, 4));

// substr() (deprecated – shown using substring instead)
console.log(str.substring(4, 10));

// toUpperCase()
console.log(str.toUpperCase());

// toLowerCase()
console.log(str.toLowerCase());

// isWellFormed()
console.log("Hello".isWellFormed());

// toWellFormed()
console.log("Hello".toWellFormed());

// trim()
console.log("  JS  ".trim());

// trimStart()
console.log("  JS".trimStart());

// trimEnd()
console.log("JS  ".trimEnd());

// padStart()
console.log("5".padStart(3, "0"));

// padEnd()
console.log("JS".padEnd(5, "*"));

// repeat()
console.log("Hi ".repeat(3));

// replace()
console.log("Hello World".replace("World", "JS"));

// replaceAll()
console.log("JS is easy. JS is powerful.".replaceAll("JS", "JavaScript"));

// split()
console.log("HTML,CSS,JS".split(","));


// fromCharCode()
console.log(String.fromCharCode(72, 105));

// localeCompare()
console.log("apple".localeCompare("banana"));
console.log("banana".localeCompare("apple"));

// prototype (custom method)
String.prototype.reverse = function () {
    return this.split("").reverse().join("");
};
console.log("JavaScript".reverse());

// toLocaleLowerCase()
console.log("İSTANBUL".toLocaleLowerCase("tr"));

// toLocaleUpperCase()
console.log("istanbul".toLocaleUpperCase("tr"));

// toString()
let s = new String("JS");
console.log(s.toString());

// valueOf()
let obj = new String("JavaScript");
console.log(obj.valueOf());



console.log("String Search Methods");
let text = "JavaScript is easy and JavaScript is powerful";

// indexOf()
console.log(text.indexOf("JavaScript"));

// lastIndexOf()
console.log(text.lastIndexOf("JavaScript"));

// search()
console.log(text.search("easy"));

// match()
console.log(text.match(/JavaScript/g));

// matchAll()
for (let m of text.matchAll(/JavaScript/g)) {
    console.log(m[0]);
}

// includes()
console.log(text.includes("powerful"));

// startsWith()
console.log(text.startsWith("JavaScript"));

// endsWith()
console.log(text.endsWith("powerful"));
