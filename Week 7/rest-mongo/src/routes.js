const router = require("express").Router();

const usersModel = require("../models/users")();

module.exports = function routes() {
  router.get("/", (req, res) => res.send("hello world"));
  router.post("/", async (req, res) => {
    try {
      await usersModel.create(req.body);
      res.json({ message: "success create data users" });
    } catch (error) {
      res.status(500).json({ message: "error when create data users" });
    }
  });
  router.put("/", (req, res) => res.send("hello world"));
  router.delete("/", (req, res) => res.send("hello world"));

  return router;
};
