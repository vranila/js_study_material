// ============================================
// Cookies
// ============================================
// Small pieces of data stored in browser
// Sent automatically with HTTP requests
// Used for:
// - Authentication
// - Session tracking
// - Analytics

// ------------------------------
// SET COOKIE
// ------------------------------

// Basic cookie
document.cookie = "username=John";

// Cookie with expiration
document.cookie = "theme=dark; expires=Fri, 31 Dec 2026 23:59:59 GMT";

// Secure cookie

// ------------------------------
// GET COOKIE
// ------------------------------

// document.cookie returns a single string
console.log(document.cookie);

// Parsing manually required

// ----------------------------------------
// Cookie Attributes
// ----------------------------------------
// path=/           -> accessible across entire domain
// max-age=3600     -> expires after 1 hour
// expires=DATE     -> expiration date
// secure           -> HTTPS only
// HttpOnly         -> not accessible via JS (server-set only)
// SameSite=Strict  -> prevents CSRF

// ----------------------------------------
// Cookies vs localStorage
// ----------------------------------------
// Cookies: 4KB limit, sent to server
// localStorage: 5MB, client-side only