// ============================================
// File System (fs) Module
// ============================================

const fs = require("fs");

// ------------------------------
// Reading File (Async)
// ------------------------------

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// ------------------------------
// Writing File
// ------------------------------

fs.writeFile("output.txt", "Hello Node", (err) => {
  if (err) console.error(err);
});