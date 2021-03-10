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

  await UsersModel.create([
    { fullName: "John 1", age: 34 },
    { fullName: "John 2", age: 22 },
    { fullName: "John 3", age: 39 },
    { fullName: "John 4", age: 60 },
    { fullName: "John 5", age: 68 },
    { fullName: "John 6", age: 66 },
    { fullName: "John 7", age: 35 },
    { fullName: "John 8", age: 103 },
    { fullName: "John 9", age: 32 },
    { fullName: "John 10", age: 68 },
  ]);
})();
