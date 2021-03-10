const express = require("express");

const app = express();

const profileRouter = require("./router/profile");
const articleRouter = require("./router/article");

app.get("/", (req, res) => res.send("ini home"));

app.use("/profile", profileRouter);

app.use("/article", articleRouter);

app.listen(3500, () => console.log("this run in poort 3500"));
