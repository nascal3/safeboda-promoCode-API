const express = require('express');
const promo = require('../routes/promo_codes');

module.exports = function (app) {
  app.use(express.json());
  app.use('/api/promocode', promo);
};
