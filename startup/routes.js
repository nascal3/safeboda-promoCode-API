const express = require('express');
const promo = require('../routes/promo_codes');
const radius = require('../routes/radius');
const home = require('../routes/home');

module.exports = function (app) {
  app.use(express.json());
  app.use('/api/promocode', promo);
  app.use('/api/radius', radius);
  app.use('/', home);
};
