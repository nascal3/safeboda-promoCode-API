const express = require('express');
const Promo = require('../models/promo_code');
const Area = require('../models/area');
require('express-async-errors');
const router = express.Router();

// GET all promo code listing
router.get('/', async (req, res) => {

  const allUsers = await Promo.findAll();
  res.send(allUsers);
});

// GET all radius/area listing
router.get('/radius', async (req, res) => {

  const allAreas = await Area.findAll();
  // console.log(allAreas[0].dataValues.radius);
  let txt_radius = allAreas[0].dataValues.radius;

  res.send(JSON.parse(txt_radius));
});



module.exports = router;
