/*
-------------------------------------------------------------
JAVASCRIPT SETS – ALL IMPORTANT EXAMPLES
A Set stores UNIQUE values (no duplicates).
-------------------------------------------------------------
*/

// CREATE A SET
console.log("Create Set");
let set1 = new Set([1, 2, 3, 3]);
console.log(set1); // duplicates removed

// add()
console.log("\nadd()");
set1.add(4);
set1.add(2); // ignored (duplicate)
console.log(set1);

// size
console.log("\nsize");
console.log(set1.size);

// has()
console.log("\nhas()");
console.log(set1.has(3)); // true
console.log(set1.has(10)); // false

// delete()
console.log("\ndelete()");
set1.delete(2);
console.log(set1);

// clear()
console.log("\nclear()");
let tempSet = new Set([10, 20]);
tempSet.clear();
console.log(tempSet);

// forEach()
console.log("\nforEach()");
let colors = new Set(["red", "green", "blue"]);
colors.forEach(value => console.log(value));

// values()
console.log("\nvalues()");
for (let v of colors.values()) {
  console.log(v);
}

// keys() (same as values in Set)
console.log("\nkeys()");
for (let k of colors.keys()) {
  console.log(k);
}

// entries()
console.log("\nentries()");
for (let entry of colors.entries()) {
  console.log(entry); // [value, value]
}

// Set with mixed data types
console.log("\nMixed data types");
let mixed = new Set([1, "one", true]);
console.log(mixed);

// Convert Set to Array
console.log("\nSet to Array");
let arr = [...colors];
console.log(arr);

// Remove duplicates from Array using Set
console.log("\nRemove duplicates from Array");
let nums = [1, 2, 2, 3, 3, 4];
let uniqueNums = [...new Set(nums)];
console.log(uniqueNums);

// Union of Sets
console.log("\nUnion of Sets");
let a = new Set([1, 2, 3]);
let b = new Set([3, 4, 5]);
let union = new Set([...a, ...b]);
console.log(union);

// Intersection of Sets
console.log("\nIntersection of Sets");
let intersection = new Set([...a].filter(x => b.has(x)));
console.log(intersection);

// Difference of Sets
console.log("\nDifference of Sets (a - b)");
let difference = new Set([...a].filter(x => !b.has(x)));
console.log(difference);

// Check if object is a Set
console.log("\nCheck Set");
console.log(set1 instanceof Set);

