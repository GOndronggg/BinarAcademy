const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.send("hello world");
});

app.listen(5000, () => console.log("run in 5000"));
