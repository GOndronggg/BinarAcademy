const profileModel = require("../model/profilemodel");

class profileController {
  home(req, res) {
    res.send("ini home dar page profile");
  }

  all(req, res) {
    const listProfiles = profileModel.getAllProfile();
    res.send("ini home page dari all profile");
  }
}

module.exports = new profileController();
