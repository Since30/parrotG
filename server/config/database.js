const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../data/my-database.sqlite",
});

module.exports = sequelize;
