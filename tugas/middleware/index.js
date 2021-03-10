const express = require("express");
const app = express();
const db = require("./models");

const bodyParser = require("body-parser");

const checkRequestField = (req, res, next) => {
  if (req.query.username && req.query.password) {
    next();
  } else {
    return res.send("data username dan password tidak ada");
  }
};

const checkDataTypes = async (req, res, next) => {
  const parseUsername = (await Number.isNaN(parseInt(req.query.username))) ? "" : parseInt(req.query.username);
  if (
    typeof parseUsername === "string" &&
    typeof req.query.password === "string"
  ) {
    next();
  } else {
    return res.send(
      "data username dan password tidak sesuai dengan tipe data yang diizinkan"
    );
  }
};

const checkLogin = async (req, res, next) => {
  const dataCheck = await db.user.findOne({
    where: { username: req.query.username, password: req.query.password },
  });
  if (dataCheck) {
    next();
  } else {
    return res.send("kamu tidak terdaftar di tabel users");
  }
};

const checkRequestField2 = (req, res, next) => {
  if (
    req.body.username &&
    req.body.password &&
    req.body.age &&
    req.body.email
  ) {
    next();
  } else {
    return res.send("data tidak lengkap");
  }
};

const checkAge = async (req, res, next) => {
  if (typeof req.body.age == "string") {
    return res.send("Data umur salah");
  } else {
    next();
  }
};

app.get("/", checkRequestField, checkDataTypes, checkLogin, (req, res) =>
  // validasi data request
  res.send("kamu telah terdaftar di tabel users")
);

app.post("/", checkRequestField2, checkAge, async (req, res) => {
  const username = req.body["username"];
  const password = req.body["password"];
  const age = req.body["age"];
  const email = req.body["email"];
  await db.users.create({
    username: username,
    password: password,
    age: age,
    email: email,
    createdAt: new Data(),
    updatedAt: new Data(),
  });
  // Insert new users di database
  res.body("kamu terdaftar di tabel users");
});

app.get("*", (req, res) => {
  // validasi data request
  res.status(404).json({ massage: "routing tidak ditemukan" });
});

app.listen(5000, () => console.log("running on port 5000"));
