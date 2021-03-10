const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const routes = require("./routes");

app.use(bodyParser.json());

app.use("/", routes);

app.listen(5200, () => console.log("this pp running on port 5200"));
