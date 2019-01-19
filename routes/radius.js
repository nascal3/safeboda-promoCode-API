const express = require('express');
const Promo = require('../models/promo_code');
const Area = require('../models/area');
require('express-async-errors');
const router = express.Router();

// Create new map area radius
router.post('/new', async (req, res) => {

  const newRadius = await Area.create({
    area_name: req.body.area_name,
    radius: JSON.stringify(req.body.radius)
  });

  res.status(200).send(newRadius);
});

// Edit map area radius
router.post('/edit/:id', async (req, res) => {

  let data = {area_name: req.body.area_name};

  if (req.body.radius) {
    data = {
      area_name: req.body.area_name,
      radius: JSON.stringify(req.body.radius)
    }
  }

  const newRadius = await Area.update(
    data,
    {
      where: {
        id: req.body.id
      }
    }
  );

  res.status(200).send(newRadius);
});

module.exports = router;
