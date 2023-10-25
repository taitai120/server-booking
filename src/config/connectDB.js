const { Sequelize } = require("sequelize");

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize("test_db", "root", null, {
  host: "localhost",
  dialect: "mysql",
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("connection ok");
  } catch (error) {
    console.log("unable to connect", error);
  }
};

module.exports = connectDB;
