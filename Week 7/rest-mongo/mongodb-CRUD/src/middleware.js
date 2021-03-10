class Middleware {
  async checkData(req, res, next) {
    const allowedkeys = ["fullName", "age"];
    const data = req.body;

    try {
      if (!data.length) {
        throw new Error("request data can't be empty");
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new Middleware();

// try {
//   // Pengulangan untuk mencari key yang tidak sesuai
//   for (let i = 0; i < data.length; i++) {
//     const requestKeys = Object.keys(data[i]);
//     for (let j = 0; j < requestKeys.length; j++) {
//       if (!allowedkeys.includes(requestKeys[j])) {
//         throw new Error(`data ${requestKeys[j]} tidak sesuai format`);
//       }
//     }
//   }
//   return next();
// } catch (error) {
//   res.status(400).json({ message: "request data is not valid" });
// }
