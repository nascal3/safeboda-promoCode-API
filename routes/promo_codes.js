const express = require('express');
const Promo = require('../models/promo_code');
const Area = require('../models/area');
require('express-async-errors');
const router = express.Router();

// GET all promo code listing
router.get('/', async (req, res) => {

  const allCodes = await Promo.findAll({
    include: [Area]
  });

  res.send(allCodes);
});

// GET all radius/areas polygons listing
router.get('/radius', async (req, res) => {

  const allAreas = await Area.findAll({
    include: [Promo]
  });

  res.send(allAreas);
});

module.exports = router;
