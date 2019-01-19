const express = require('express');
const Promo = require('../models/promo_code');
const Area = require('../models/area');
const validate = require('../validate/validatePromoCode');
require('express-async-errors');
const router = express.Router();

// ====CHECK EXISTENCE OF AN AREA RADIUS===
const areaRadiusExist = (async (id) => {

  const exist = await Area.findAll({
    where: {
      id: id
    }
  });
  return exist.length >= 1 ;

});

// ===GENERATE UNIQUE PROMO CODE===
const generatePromoCode = (async () => {

  let genCode = Math.random().toString(36).substring(7);
  let promoCode = genCode.toUpperCase();

  const exist = await Promo.findAll({
    where: {
      code: promoCode
    }
  });

  if (exist.length >= 1) {
    await generatePromoCode();
  } else {
    return promoCode;
  }

});


// Generate/create new promo code
router.post('/new', async (req, res) => {

  if (req.body.area_id) {
    let exist = await areaRadiusExist(req.body.area_id);
    if (!exist) return res.status(400).send('The area radius set does not exists!');
  }

  let active_days = parseInt(req.body.active_days);
  const exp_date = new Date(new Date().getTime() + (active_days * 24 * 60 * 60 * 1000));

  let code = await generatePromoCode();

  const newCodes = await Promo.create({
    area_id: req.body.area_id,
    code: code,
    amount: parseInt(req.body.amount),
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

// Validate promotion code
router.get('/validate', async (req, res) => {

  const promoCode = req.body.code;
  const start = req.body.start;
  const destination = req.body.destination;
  let results = await validate(promoCode, start, destination);

  res.send(results);

});

module.exports = router;
