const router = require("express").Router();
const articleController = require("../controller/articleController");

router.get("/", articleController.home);

router.get("/", articleController.all);

router.get("/", articleController.search);

router.get("/article/:id?", (req, res) => {
  const id = req.params.id ? req.params.id : "";
  res.send("ini page article " + id);
});

router.get("/news", (req, res) => res.send("ini page news dari profile"));

module.exports = router;
