const mongoose = require("mongoose");
if (process.env.ENV === "development") require("dotenv").config();


const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DB_HOST_MONGO_LOCAL);
    console.log("Mongo DB connection established successfully");
  } catch (err) {
    console.error("Unable to connect to MongoDB", err); // error is undefined, should be err
    process.exit(1);
  }
};

module.exports = { connectMongoDB };
