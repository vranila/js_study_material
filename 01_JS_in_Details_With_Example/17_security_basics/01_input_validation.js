// ==========================================================
// input_validation.js
// ==========================================================
// Input validation prevents:
// - XSS
// - SQL Injection
// - Command injection
// - Data corruption
//
// Never trust user input.
// Always validate both on:
// 1. Client side (UX)
// 2. Server side (security)
// ==========================================================

// ----------------------------------------------------------
// 1. Email Validation
// ----------------------------------------------------------
function validateEmail(email) {

  // Regex ensures correct email structure
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
}

// ----------------------------------------------------------
// 2. Password Strength Validation
// ----------------------------------------------------------
function validatePassword(password) {

  // At least:
  // - 8 characters
  // - 1 uppercase
  // - 1 lowercase
  // - 1 number

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  return regex.test(password);
}

// ----------------------------------------------------------
// 3. Sanitizing Input
// ----------------------------------------------------------
function sanitizeInput(input) {

  // Basic escaping to prevent script injection
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ----------------------------------------------------------
// 4. Server-side Example (Node.js)
// ----------------------------------------------------------
// Use validation libraries:
// - express-validator
// - Joi
// - Zod
//
// Always validate request.body, params, query
// before processing database operations.
// ==========================================================