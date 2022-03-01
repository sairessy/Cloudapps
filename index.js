import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use(express.static("public"));
app.listen(5000, () => {
  console.log("yey");
});

app.get("/app/share-position", (req, res) => {
  res.sendFile(__dirname + "/public/apps/" + "share-position/share-position.html");
});