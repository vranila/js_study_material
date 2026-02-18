function firstUnique(str) {
  for (let i of str) {
    if (str.indexOf(i) === str.lastIndexOf(i)) {
      return i;
    }
  }
  return null; 
}


let input = "rogramming";
let result = firstUnique(input);

console.log("Input:", input);
console.log("First non-repeated character:", result);
