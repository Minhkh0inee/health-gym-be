require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const {connectMongoDB, connectPostgresDB} = require("../db/database.config");

const routes = require('../../routes/index')

const app = express();
connectMongoDB();
connectPostgresDB();

if (process.env.ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cookieParser());
app.use(cors("*"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/health-gym/api", routes)

module.exports = app;
