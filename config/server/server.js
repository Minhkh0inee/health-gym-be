require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const {connectMongoDB} = require("../db/database.config");
const bodyParser = require('body-parser')
const routes = require('../../routes/index')

const app = express();
connectMongoDB();

if (process.env.ENV === "development") {
  app.use(morgan("dev"));
}

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors("*"));


app.use("/health-gym/api", routes)

module.exports = app;