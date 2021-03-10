const mongoose = require("mongoose");

(async () => {
  //connect to mongodb server
  await mongoose.connect("mongodb://localhost:27017/binaracademy", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  //init mongoose scheme
  const Schema = mongoose.Schema;

  //create users scheme(migrations)
  const Users = new Schema({
    fullName: String,
    age: Number,
  });
  // create users model
  const UsersModel = mongoose.model("users", Users);

  // insert new data
  //   await UsersModel.create({ fullName: "John Wick", age: 34 });

  // get existing data
  //const data = await UsersModel.find({});
  //console.log(data);

  //update data
  await UsersModel.updateOne({ _id: "600e875172e7694b20c71044" });
  //   const data = await UsersModel.find({});
  //   console.log(data);

  //delete data
  await UsersModel.deleteOne({ _id: "600e875172e7694b20c71044" });
  const data = await UsersModel.find({});
  console.log(data);
})();
