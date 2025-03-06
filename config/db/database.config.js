const mongoose = require("mongoose");
const { Sequelize } = require("sequelize");
if (process.env.ENV === "development") require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_HOST_POSTGRES_LOCAL, {
  dialect: "postgres",
  logging: false,
});

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DB_HOST_MONGO_LOCAL);
    console.log("Mongo DB connection established successfully");
  } catch (err) {
    console.error("Unable to connect to MongoDB", err); // error is undefined, should be err
    process.exit(1);
  }
};

const connectPostgresDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
};
module.exports = { connectMongoDB, connectPostgresDB, sequelize };
