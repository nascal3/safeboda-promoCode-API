const express = require('express');
const Promo = require('../models/promo_code');
const Area = require('../models/area');
require('express-async-errors');
const router = express.Router();

//CHECK EXISTENCE OF AN AREA RADIUS
const areaRadiusExist = (async (id) => {

  const exist = await Area.findAll({
    where: {
      id: id
    }
  });
  return exist.length >= 1 ;

});

// Generate new promo code
router.post('/new', async (req, res) => {

  let exist = await areaRadiusExist(req.body.area_id);
  if (!exist) return res.status(400).send('The area radius set does not exists!');

  const newCodes = await Promo.create({
    area_id: req.body.area_id,
    code: code,
    state: state,
    amount: req.body.amount,
    exp_date: exp_date
  });

  res.status(200).send(newCodes);
});

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

  let exist = await areaRadiusExist(req.body.area_id);
  if (!exist) return res.status(400).send('The area radius set does not exists!');

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
