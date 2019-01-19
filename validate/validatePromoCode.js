const inside = require('point-in-polygon');
const Promo = require('../models/promo_code');
const Area = require('../models/area');
require('express-async-errors');

const validateCode = (async (promoCode, start, destination) => {

  const exist = await Promo.findAll({
    where: {
      code: promoCode
    },
    include: [Area]
  });

  if (exist.length < 1) return "Code provided does not exist :(";
  if (exist[0].state === 'inactive') return "Code provided is not usable :(";
  if (exist[0].exp_date < new Date()) return "Code provided has expired :(";
  if (exist[0].area === null) return "Oops! sorry code can not yet be used :(";

  const areaRadius = JSON.parse(exist[0].area.radius);
  const startInRange = inside(start, areaRadius);
  const destinationInRange = inside(destination, areaRadius);
  if (!startInRange || !destinationInRange) return "Your location and destination are out of promotion range :(";

  return exist;

});

module.exports = validateCode;
