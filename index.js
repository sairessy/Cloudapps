const Datastore = require("nedb");
const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.json({limit: "5mb"}));

const collections = {
  users: new Datastore("./src/collections/users.db"),
  feedbacks: new Datastore("./src/collections/feedbacks.db"),
  apps: new Datastore("./src/collections/apps.db")
};

collections.users.loadDatabase();
collections.feedbacks.loadDatabase();
collections.apps.loadDatabase();

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

app.get("/sharedapps", (req, res) => {
  res.sendFile(__dirname + "/public/apps.html");
});

// Requests
app.get("/apps", (req, res) => {
  collections.apps.find({}, (err, data) => {
    res.json(data);
  })
});

app.post("/uploadapp", (req, res) => {
  const _data = req.body;
  const data = {
    ..._data, time: Date.now().toString()
  }

  collections.apps.insert(data);

  res.json({})
});

// APPS
app.get("/app/0", (req, res) => {
  res.json({});
});

app.get("/app/10", (req, res) => {
  res.sendFile(__dirname + "/public/apps/kittens-curiosities-10/index.html");
});

app.get("/app/1", (req, res) => {
  res.sendFile(__dirname + "/public/apps/imc-calculator-1/index.html");
});