const router = require("express").Router();
const UsersModel = require("../models/users")();
const middlewareAddusers = require("../middleware/addusers");
const middlewareEditusers = require("../middleware/editusers");
const middlewareDeleteusers = require("../middleware/deleteusers");

module.exports = function routes() {
  router.get("/users", async (req, res) => {
    try {
      const data = await UsersModel.find({});
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Error when read data" });
    }
  });

  router.post("/users", middlewareAddusers, async (req, res) => {
    try {
      await UsersModel.create(req.body);
      res.json({ message: " Succes crete new data users" });
    } catch (error) {
      res.status(500).json({ message: "Error when create data users" });
    }
  });

  router.put("/users", middlewareEditusers, async (req, res) => {
    try {
      await UsersModel.updateOne(
        { _id: req.body.id },
        { fullName: req.body.fullName, age: req.body.age }
      );
      res.json({ message: " Succes update data users" });
    } catch (error) {
      res.status(500).json({ message: "Error when update data users" });
    }
  });

  router.delete("/users", middlewareDeleteusers, async (req, res) => {
    try {
      await UsersModel.deleteOne({ _id: req.query.id });
      res.json({ message: `Succes delete data users ${req.query.id} ` });
    } catch (error) {
      res.status(500).json({ message: "Error when delete data users" });
    }
  });

  return router;
};
