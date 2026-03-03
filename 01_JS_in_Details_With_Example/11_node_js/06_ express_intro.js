// ============================================
// Express.js Framework
// ============================================
// Express simplifies Node HTTP server creation.

const express = require("express");
const app = express();

// Middleware (parses JSON)
app.use(express.json());

// Route
app.get("/", (req, res) => {
  res.send("Home Page");
});

// POST Route
app.post("/data", (req, res) => {
  console.log(req.body);
  res.send("Data received");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});