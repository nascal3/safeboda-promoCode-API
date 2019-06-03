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
    console.error('Error occurred: ',err[[Object.keys(err)[0]]]);
  }

};

(async () => {
  try {
    await startServer();
  } catch (err) {
    console.error('Error occurred: ',err[[Object.keys(err)[0]]]);
  }

})();

const port = process.env.PORT || 3030;
const server = app.listen( port, console.log(`listening to port ${port}`));
console.log('-->',  process.env.DATABASE);
console.log('-->',  process.env.USER);
console.log('-->',  process.env.PASSWORD);
console.log('-->',  process.env.HOST);

module.exports = server;

// sequelize.sync().then(result => {
//   const port = process.env.PORT || 3030;
//   server = app.listen( port, console.log(`listening to port ${port}`));
// }).catch( err => {
//   console.error('Error occurred: ',err.name);
// });

