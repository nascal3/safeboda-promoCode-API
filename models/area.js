const Sequelize = require('sequelize');
const sequelize = require('../startup/db');

const area = sequelize.define('area', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  area_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  radius: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = area;
