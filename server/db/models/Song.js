const Sequelize = require("sequelize");
const db = require("../db");

const Song = db.define("song", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  artist: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  cover: {
    type: Sequelize.TEXT,
  },
  sheet: {
    type: Sequelize.TEXT,
  }
})
