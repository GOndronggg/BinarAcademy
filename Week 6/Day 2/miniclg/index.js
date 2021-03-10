const express = require("express");

const app = express();

const data = [
  {
    name: "Belgian Waffles",
    price: "$5.95",
    description:
      "Two of our famous Belgian Waffles with plenty of real maple syrup",
    calories: "650",
  },
  {
    name: "Strawberry Belgian Waffles",
    price: "$7.95",
    description:
      "Light Belgian waffles covered with strawberries and whipped cream",
    calories: "900",
  },
  {
    name: "Berry-Berry Belgian Waffles",
    price: "$8.95",
    description:
      "Belgian waffles covered with assorted fresh berries and whipped cream",
    calories: "900",
  },
  {
    name: "French Toast",
    price: "$4.50",
    description: "Thick slices made from our homemade sourdough bread",
    calories: "600",
  },
  {
    name: "Homestyle Breakfast",
    price: "$6.95",
    description:
      "Two eggs, bacon or sausage, toast, and our ever-popular hash browns",
    calories: "950",
  },
];

app.get("/Menu", (req, res) => res.json(data));

app.get("/Food/:id", (req, res) => res.json(data[req.params.id - 1]));

app.get("/Foods/Cal", (req, res) => {
  let totalCal = 0;

  for (let index = 0; index < data.length; index++) {
    totalCal += parseInt(data[index].calories);
  }
  res.json({ totalCal: totalCal });
});

app.listen(3500, () => console.log("running in port 3500"));
