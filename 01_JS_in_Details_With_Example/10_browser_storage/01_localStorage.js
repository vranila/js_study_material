// ============================================
// localStorage
// ============================================
// localStorage is a Web Storage API that allows
// storing key-value pairs in the browser.
//
// Characteristics:
// - Persists even after browser/tab is closed
// - Storage limit ~5MB (varies by browser)
// - Data stored as strings only
// - Same-origin policy applies
// - Synchronous API (can block main thread)

// SET ITEM
localStorage.setItem("username", "John");

// GET ITEM
const user = localStorage.getItem("username");
console.log(user); // "John"

// REMOVE ITEM
localStorage.removeItem("username");

// CLEAR ALL STORAGE
localStorage.clear();

// ------------------------------
// SETTING DATA
// ------------------------------

// Stores value as a string
localStorage.setItem("username", "John");

// If storing objects → convert to JSON string
const user1 = { name: "Alice", age: 25 };
localStorage.setItem("user", JSON.stringify(user1));

// ------------------------------
// GETTING DATA
// ------------------------------

const username = localStorage.getItem("username");
console.log(username);

// Parsing JSON string back into object
const storedUser1 = JSON.parse(localStorage.getItem("user"));
console.log(storedUser1.name);

// ------------------------------
// REMOVING DATA
// ------------------------------

localStorage.removeItem("username");

// Clear all keys for this origin
localStorage.clear();

// ----------------------------------------
// Important: localStorage only stores STRINGS
// ----------------------------------------

// To store objects, use JSON.stringify
const userObj = { name: "Alice", age: 25 };
localStorage.setItem("user", JSON.stringify(userObj));

// To retrieve object, use JSON.parse
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name);

// ----------------------------------------
// Limitations
// ----------------------------------------
// - ~5MB storage limit
// - Synchronous (can block main thread)
// - Not secure (visible in DevTools)
// - Same-origin only