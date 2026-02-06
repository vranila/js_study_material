/*
=============================================================
JAVASCRIPT COOKIES – COMPLETE EXAMPLES
=============================================================
*/

// -------------------------------------------------------------
// JavaScript Cookies (Create / Read)
console.log("JavaScript Cookies");

// Create a cookie
document.cookie = "username=Anila; path=/";

// Read cookies
console.log("All Cookies:", document.cookie);

// -------------------------------------------------------------
// JavaScript Cookie Attributes
console.log("\nJavaScript Cookie Attributes");

// Expires attribute
document.cookie = "user=Admin; expires=Fri, 31 Dec 2027 12:00:00 UTC; path=/";

// Max-Age attribute (in seconds)
document.cookie = "sessionId=12345; max-age=3600; path=/";

// Secure attribute (sent only over HTTPS)
document.cookie = "secureUser=Yes; Secure; path=/";

// SameSite attribute
document.cookie = "sameSiteTest=Strict; SameSite=Strict; path=/";

console.log("Cookies with Attributes:", document.cookie);

// -------------------------------------------------------------
// JavaScript – Deleting Cookies
console.log("\nJavaScript Deleting Cookies");

// Delete cookie by setting expiry date to past
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

// Delete using max-age
document.cookie = "user=; max-age=0; path=/";

console.log("Cookies After Deletion:", document.cookie);
