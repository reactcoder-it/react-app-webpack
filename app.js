const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname), "assets/index.html");
});

const data = [
  {
    id: 1,
    name: "Hello"
  },
  {
    id: 2,
    name: "world!"
  }
];
app.get("/data", (req, res) => {
  res.send(data);
});

app.listen(3000, (req, res) => {
  console.log("started on port 3000");
});
