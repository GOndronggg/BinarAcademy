class articleController {
  home(req, res) {
    res.send("ini home dari page article");
  }

  all(req, res) {
    res.send("ini home page dari all article");
  }

  search(req, res) {
    res.send("ini home page dari search article");
  }
}

module.exports = new articleController();
