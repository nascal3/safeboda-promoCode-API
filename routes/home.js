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

    res.status(200).send(allCodes);
});

module.exports = router;
