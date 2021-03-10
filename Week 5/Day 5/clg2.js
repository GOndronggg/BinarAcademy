const express = require("express");
var path = require("path");
const app = express();

app.get("/route1", (req, res) => {
  res.sendFile(path.join(__dirname + "/route1.html"));
});

app.post("/route2", (req, res) => {
  res.sendFile(path.join(__dirname + "/route2.html"));
});

app.put("/route3", (req, res) => {
  res.sendFile(path.join(__dirname + "/route3.html"));
});

app.patch("/route4", (req, res) => {
  res.sendFile(path.join(__dirname + "/route4.html"));
});

app.delete("/route5", (req, res) => {
  res.sendFile(path.join(__dirname + "/route5.html"));
});

app.copy("/route6", (req, res) => {
  res.sendFile(path.join(__dirname + "/route6.html"));
});

app.unlink("/route7", (req, res) => {
  res.sendFile(path.join(__dirname + "/route7.html"));
});

app.options("/route8", (req, res) => {
  res.sendFile(path.join(__dirname + "/route8.html"));
});

app.listen(3200, () => console.log("app run on port 3200"));
