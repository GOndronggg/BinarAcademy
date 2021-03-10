const db = require("../models");

class TasksController {
  async get(req, res) {
    const data = await db.tasks.findAll({
      attributes: ["user_id", "description", "status"],
    });
    res.json(data);
  }
  async post(req, res) {
    const userID = req.body["user_id"];
    const description = req.body["description"];
    const status = req.body["status"];
    await db.tasks.create({
      user_id: userID,
      description: description,
      status: status,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.send("success insert data " + userID);
  }
  async put(req, res) {
    const userID = req.body["user_id"];
    const id = req.body.id;
    await db.tasks.update({ where: { id: id } });
    res.send(`success update id ${id} with new user id ${user_id}`);
  }
  async delete(req, res) {
    const id = req.query.id;
    await db.tasks.destroy({ where: { id: id } });
    res.send("success delete data from tasks with id " + id);
  }
}

module.exports = Object.freeze(new TasksController());
