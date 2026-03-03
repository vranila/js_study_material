// ===============================
// JavaScript Error Handling
// ===============================
console.log("=== JavaScript Error Handling ===");
try {
  let a = 10;
  let b = a + c; // c is not defined
} catch (error) {
  console.log("Error caught:", error.message);
}

// ===============================
// JavaScript try...catch...finally
// ===============================
console.log("\n=== try...catch...finally ===");
try {
  let num = 5;
  console.log(num.toUpperCase()); // invalid
} catch (err) {
  console.log("Caught error:", err.message);
} finally {
  console.log("Finally block executed");
}

// ===============================
// JavaScript Debugging
// ===============================
console.log("\n=== JavaScript Debugging ===");
function add(x, y) {
  debugger; // pause execution in browser dev tools
  return x + y;
}
console.log("Result:", add(3, 4));

// ===============================
// JavaScript Custom Errors
// ===============================
console.log("\n=== JavaScript Custom Errors ===");
function checkAge(age) {
  if (age < 18) {
    throw new Error("Age must be 18 or above");
  }
  return "Access granted";
}

try {
  console.log(checkAge(16));
} catch (e) {
  console.log("Custom Error:", e.message);
}

// ===============================
// JavaScript Extending Errors
// ===============================
console.log("\n=== JavaScript Extending Errors ===");
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateUsername(name) {
  if (name.length < 5) {
    throw new ValidationError("Username must be at least 5 characters long");
  }
  return "Valid username";
}

try {
  console.log(validateUsername("abc"));
} catch (err) {
  console.log(err.name + ":", err.message);
}
