const express = require('express');
const app = express();

// CALL TO DB CONNECTION FOLDER
const sequelize = require('./startup/db');
// const model = require('./models/articles');

// CALL TO ROUTES FOLDER
require('./startup/routes')(app);

// CREATE TABLES IF THEY DON'T EXIST
const startServer = async () => {
  try {
    await sequelize.sync();
  } catch (err) {
    console.error('Error occurred: ',err);
  }

};

(async () => {
  try {
    await startServer();
  } catch (err) {
    console.error('Error occurred: ',err);
  }

})();

const port = process.env.PORT || 3030;
const server = app.listen( port, console.log(`listening to port ${port}`));
console.log('DB -->',  process.env.DATABASE);
console.log('USER -->',  process.env.USER);
console.log('PASS -->',  process.env.PASSWORD);
console.log('HOST -->',  process.env.HOST);

module.exports = server;

// sequelize.sync().then(result => {
//   const port = process.env.PORT || 3030;
//   server = app.listen( port, console.log(`listening to port ${port}`));
// }).catch( err => {
//   console.error('Error occurred: ',err.name);
// });

