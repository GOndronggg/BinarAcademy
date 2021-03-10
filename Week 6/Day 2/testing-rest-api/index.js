const express = require("express");

const db = require("./models");

const app = express();

app.post("/foods", async (req, res) => {
  await db.foods.create({
    name: "Belgian Waffles",
    price: "$5.95",
    description:
      "Two of our famous Belgian Waffles with plenty of real maple syrup",
    calories: "650",
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  res.json({ message: "success insert data foods" });
});

app.get("/foods", async (req, res) => {
  const data = await db.foods.findAll();

  res.json({ message: "success read data foods from database", data: data });
});

app.get("/foods");

app.put("/foods");

app.delete("/foods");

app.listen(3000, () => console.log("run in port 3000"));
