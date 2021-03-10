const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//connect mongodb database through mongoose
mongoose.connect("mongodb://localhost:27017/jwtauth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//make users scheme
const UsersSchema = new mongoose.Schema({
  username: String,
  password: String,
  salt: String,
});

//make model
const UsersModel = mongoose.model("users", UsersSchema);

//middleware authentication
const middlewareAuth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  console.log(token);
  next();
};

const app = express();
app.get("/", (req, res) => {
  res.send("Deployed");
});
//handle raw json request from body
app.use(bodyParser.json());
//handle x-www-urlencoded request
app.use(bodyParser.urlencoded({ extended: false }));

//route login(berguna untuk proses login dari user)
app.post("/login", async (req, res) => {
  let statusCode = 500;

  try {
    const username = req.body.username;
    const password = req.body.password;

    //find data in mongodb with username from req.body
    const users = await UsersModel.findOne({ username: username });

    //check is data username exist
    if (!users) {
      statusCode = 404;
      throw new Error("users not found");
    }

    //compare password req.body with database
    const isPasswordMatch = await bcrypt.compare(password, users.password);
    if (!isPasswordMatch) {
      statusCode = 400;
      throw new Error("password invalid");
    }
    //generate JWT token (custom preferences)
    const token = jwt.sign({ username: users.username }, "b1n4r!");

    //make success response
    res.json({
      message: "success login",
      data: {
        token: token,
      },
    });
  } catch (error) {
    res.status(statusCode).json({ message: error.message });
  }
});

//route register
app.post("/register", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  //generate salt w/ lv.10
  const saltKey = await bcrypt.genSalt(10);

  //format pass string to hash
  const hashPassword = await bcrypt.hash(password, saltKey);

  //insert data username, hashpass, and salt to database
  await UsersModel.create({
    username: username,
    password: hashPassword,
    salt: saltKey,
  });

  res.json({
    message: "success insert new users",
  });
});

//route that require authentication process
//app.get("/users", middlewareAuth, (req, res) =>
//res.send("hello this is users router")
//);

//app run
//app.listen(5000, () => console.log("app run on port 5000"));
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("app run on port 5000");
});
