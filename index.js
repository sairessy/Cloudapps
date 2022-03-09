const express = require("express");
const app = express();
app.use(express.static("public"));
app.listen(5000, () => {
  console.log("yey");
});

// Main App


// Apps
app.get("/app/0", (req, res) => {
  res.json({});
});

app.get("/app/1", (req, res) => {
  res.sendFile(__dirname + "/public/apps/imc-calculator-1/index.html");
});