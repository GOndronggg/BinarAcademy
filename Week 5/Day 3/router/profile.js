const router = require("express").Router();
const profileController = require("../controller/profileController");

router.get("/", profileController.home);

router.get("/", profileController.all);

router.get("/all", (req, res) => res.send("ini page all dari page profile"));

router.get("/find", (req, res) => res.send("ini page find dari page profile"));

router.get("/article/:id?", (req, res) => {
  const id = req.params.id ? req.params.id : "";
  res.send("ini page article dari profile " + id);
});

router.get("/news", (req, res) => res.send("ini page news dari profile"));

module.exports = router;
