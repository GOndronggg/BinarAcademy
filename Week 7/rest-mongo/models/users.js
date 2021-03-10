const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

module.exports = function usersModel() {
  const usersSchema = new Schema({
    fullName: String,
    age: Number,
  });

  return mongoose.model("users", usersSchema);
};
