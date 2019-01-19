const express = require('express');
const Promo = require('../models/promo_code');
const Area = require('../models/area');
require('express-async-errors');
const router = express.Router();

// GET all promo code listing
router.get('/all', async (req, res) => {

  const allCodes = await Promo.findAll({
    include: [Area]
  });

  res.status(200).send(allCodes);
});

// GET all active promo code listing
router.get('/active', async (req, res) => {

  const allCodes = await Promo.findAll({
    where: {
      state: 'active'
    },
    include: [Area]
  });

  res.status(200).send(allCodes);
});

// Edit promo code
router.post('/edit/:id', async (req, res) => {

  const exist = await Area.findAll({
    where: {
      id: req.body.area_id
    }
  });
  if (exist.length < 1) return res.status(400).send('The following area radius does not already exists!');

  const results = await Promo.update(
      {
        area_id: req.body.area_id,
        state: req.body.state
      },
      {
        where: {
          id: req.body.id
        }
      }
  );

  res.status(200).send(results);

});

// GET all radius/areas polygons listing
router.get('/radius', async (req, res) => {

  const allAreas = await Area.findAll({
    include: [Promo]
  });

  res.status(200).send(allAreas);
});

module.exports = router;
