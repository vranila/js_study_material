// ========================================
// Exporting Module
// file: math.js
// ========================================

function add(a, b) {
  return a + b;
}

module.exports = add;

// ========================================
// Importing Module
// file: app.js
// ========================================

add = require("./math");
console.log(add(2, 3));

// ----------------------------------------
// ES Modules alternative:
// export default add
// import add from './math.js'