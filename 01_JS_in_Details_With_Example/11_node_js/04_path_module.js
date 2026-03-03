// ============================================
// Path Module
// ============================================

const path = require("path");

// Join paths safely
const filePath = path.join(__dirname, "folder", "file.txt");

console.log(filePath);

// Extract filename
console.log(path.basename(filePath));

// Get extension
console.log(path.extname(filePath));