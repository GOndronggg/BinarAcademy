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

  const data = [
    {
      fullName: "John Kuliahskuy",
      age: 23,
    },
    {
      fullName: "John Kerjalah",
      age: 24,
    },
  ];

  const allowedKeys = ["fullName", "age"];

  try {
    for (let index = 0; index < data.length; index++) {
      const requestKeys = Object.keys(data[index]);

      for (let index2 = 0; index2 < requestKeys.length; index2++) {
        if (!allowedKeys.includes(requestKeys[index2])) {
          throw new Error(`data ${requestKeys[index2]} tidak sesuai format`);
        }
      }
    }

    await UsersMode.create();

    console.log("success insert data to users scheme");
  } catch (error) {
    console.log(error);
  }
})();
