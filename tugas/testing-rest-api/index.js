const express = require("express");

const bodyParser = require("body-parser");

const db = require("./models");

const app = express();

app.use(bodyParser.json);

// Create
app.post("/foods", async (req, res) => {
  const name = req.body["name"];
  const price = req.body["price"];
  const description = req.body["description"];
  const calories = req.body["calories"];
  await db.foods.create({
    name: name,
    price: price,
    description: description,
    calories: calories,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.json({ message: "success insert data calories food " + name });
});

// Read
app.get("/foods", async (req, res) => {
  const data = await db.users.findAll();
  res.json({ message: "success read data foods from database", data: data });
});

// Update
app.put("/foods", async (req, res) => {
  const name = req.body["name"];
  const id = req.body.id;
  await db.users.update(
    {
      name: nama,
    },
    {
      where: { id: id },
    }
  );
  res.json(`{ message: "success update id ${id} with new name ${name}`);
});

// Delete
app.delete("/foods", async (req, res) => {
  const id = req.query.id;
  await db.foods.destroy({ where: { id: id } });
});

app.listen(3000, () => console.log("runnning on port 3000"));
