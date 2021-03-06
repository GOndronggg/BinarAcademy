const express = require("express");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const connectEnsureLogin = require("connect-ensure-login");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  expressSession({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/authpassport", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  username: String,
  password: String,
});

UsersSchema.plugin(passportLocalMongoose);

const UsersModel = mongoose.model("users", UsersSchema);

passport.use(UsersModel.createStrategy());
passport.serializeUser(UsersModel.serializeUser());
passport.deserializeUser(UsersModel.deserializeUser());

app.post("/register", (req, res) => {
  UsersModel.register(
    { username: req.body.username, active: true },
    req.body.password
  );
  res.send("success register");
});

app.get("/login", (req, res) => res.send("you must login first"));

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.redirect("/404");
    }

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }

      return res.redirect("/users");
    });
  })(req, res, next);
});

app.get("/404", (req, res) => res.send("you're not authenticated"));

app.get("/users", connectEnsureLogin.ensureLoggedIn(), (req, res) =>
  res.send("congrats you're authenticated")
);

app.listen(5000, () => console.log("app running on port 5000"));
