// const config = require('config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    // process.env.DATABASE,
    // process.env.USER,
    // process.env.PASSWORD,
    'kodipoin_node',
    'kodipoin_node',
    '3kFYVT4WmUUT',
    {
      dialect: 'mysql',
      host: 'localhost',
      // host: process.env.HOST,
      operatorsAliases: false
    }
);

module.exports = sequelize;
