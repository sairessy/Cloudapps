const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.json({limit: "3mb"}));

app.listen(5000, () => {
  console.log("yey");
});

// MAIN APP
// Pages
app.get("/submitappguide", (req, res) => {
  res.sendFile(__dirname + "/public/submit-app-guide.html");
});

app.get("/submitapp", (req, res) => {
  res.sendFile(__dirname + "/public/submit-app.html");
});

// Requests
app.post("/uploadapp", (req, res) => {
  const data = req.body;
  res.json({});
});

app.get("/apps", (req, res) => {
  res.json({});
});

// APPS
app.get("/app/0", (req, res) => {
  res.json({});
});

app.get("/app/1", (req, res) => {
  res.sendFile(__dirname + "/public/apps/imc-calculator-1/index.html");
});