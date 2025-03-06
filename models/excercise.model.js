const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db/database.config");

const User = sequelize
  .define("user", {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  })
  .sync({ force: true });

module.exports = User;
