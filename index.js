const express = require("express");
const app = express();
app.use(express.static("public"));
app.listen(5000, () => {
  console.log("yey");
});

app.get("/app/share-position", (req, res) => {
  res.sendFile(__dirname + "/public/apps/" + "share-position/share-position.html");
});