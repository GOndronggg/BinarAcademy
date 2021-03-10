const app = require("./src/app");
const mongoConnect = require("./src/mongoose");

(async () => {
  try {
    // Start dbConnection
    await mongoConnect();

    //starts apps
    app(3000);
  } catch (error) {
    console.log(error);
    console.log(`error app can't running`);
  }
})();
