const express = require("express");
var path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.send("hello from express");
});

app.get("/Home", (req, res) => {
  res.sendFile(path.join(__dirname + "/home.html"));
});

app.get("/International", (req, res) => {
  res.sendFile(path.join(__dirname + "/international.html"));
});

app.get("/National", (req, res) => {
  res.sendFile(path.join(__dirname + "/national.html"));
});

app.get("/Health", (req, res) => {
  res.sendFile(path.join(__dirname + "/health.html"));
});

app.get("/Automotive", (req, res) => {
  res.sendFile(path.join(__dirname + "/automotive.html"));
});

app.get("/Politics", (req, res) => {
  res.sendFile(path.join(__dirname + "/politics.html"));
});

app.get("/LifeStyle", (req, res) => {
  res.sendFile(path.join(__dirname + "/lifestyle.html"));
});

app.get("/Game", (req, res) => {
  res.sendFile(path.join(__dirname + "/game.html"));
});

app.get("/Anime", (req, res) => {
  res.sendFile(path.join(__dirname + "/anime.html"));
});

app.get("/Art", (req, res) => {
  res.sendFile(path.join(__dirname + "/art.html"));
});

app.get("/Andrea", (req, res) => {
  res.sendFile(path.join(__dirname + "/andrea.html"));
});
// app.post("/", (req, res) => {
//   res.send("hello from express post");
// });

// app.patch("/", (req, res) => {
//   res.send("hello from express patch");
// });

app.listen(3200, () => console.log("app run on port 3200"));
