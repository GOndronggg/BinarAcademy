const mongoose = require("mongoose");

(async () => {
  await mongoose.connect("mongodb://localhost:27017/binaracademy", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  const Schema = mongoose.Schema;

  const Users = new Schema({
    fullName: String,
    age: Number,
  });

  const UsersModel = mongoose.model("users", Users);

  await UsersModel.updateOne({ _id: "" }, { fullName: "" });
})();
