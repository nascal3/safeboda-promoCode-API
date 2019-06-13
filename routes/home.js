const express = require('express');
require('express-async-errors');
const router = express.Router();

// GET all promo code listing
router.get('/', async (req, res) => {
     res.status(200).send("server is healthy");
});

module.exports = router;
