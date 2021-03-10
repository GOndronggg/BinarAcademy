// Init Sequelize
const { Sequelize } = require("sequelize");
// Connect Sequelize
const sequelize = new Sequelize("binaracademy", "mawang", "Mawang1!", {
  host: "localhost",
  dialect: "mariadb",
});

const testConnection = async () => {
  // Check Database Connection
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const getAllStudent = async () => {
  const data = await sequelize.query(
    "select * from binaracademy.tbl_student where id = 3"
  );
  return data;
};

testConnection();

getAllStudent().then((data) => console.log(data[0][0].id));
