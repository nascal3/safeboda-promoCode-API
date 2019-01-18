const Sequelize = require('sequelize');
const sequelize = require('../startup/db');
const AreaModel = require('./area');

const promo = sequelize.define('promocode', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  area_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: AreaModel,
      key: AreaModel.id
    }
  },
  code: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  state: {
    type: Sequelize.ENUM,
    values: ['active', 'inactive'],
    allowNull: false,
    defaultValue: 'inactive'
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  exp_date: {
    type: Sequelize.DATE,
    allowNull: false
  }
});

promo.belongsTo(AreaModel, {
  foreignKey: 'area_id'
});
AreaModel.hasMany(promo, {
  foreignKey: 'area_id'
});

module.exports = promo;
