const request = require('supertest');
const Promo = require("../../../models/promo_code");
const Area = require("../../../models/area");
let server;

describe('/api/promocode', () => {
  beforeEach(() => {
    server = require('../../../app');
  });

  afterEach(() => {
    server.close();
    Promo.destroy({
      where: {
        code: "code"
      }
    });

    Area.destroy({
      where: {
        area_name: "test area"
      }
    });
  });

  describe('GET', () => {
    it('should return all promotion codes', async () => {

      const exp_date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
      await Promo.create(
        {
          code: 'code',
          amount: 122,
          exp_date: exp_date
        }
      );

      const res = await request(server).get('/api/promocode/all');
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

  describe('GET', () => {
    it('should return valid promotion code info', async () => {

      const exp_date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
      await Promo.create(
          {
            code: 'code',
            amount: 200,
            exp_date: exp_date
          }
      );

      const radius_area = [[ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ]];
      await Area.create({
        area_name: "test area",
        radius: JSON.stringify(radius_area)
      });

      const res = await request(server).get('/api/promocode/validate', {
        "code": "testCode",
        "start": [  1.5, 1.5 ],
        "destination": [  1.8, 1.1  ]
      });
      expect(res.body).toHaveProperty('code', res.code);
    });
  });

  describe('GET', () => {
    it('should return all promotion codes that are active', async () => {

      const exp_date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
      let code = await Promo.create(
          {
            code: 'code',
            amount: 122,
            state: 'active',
            exp_date: exp_date
          }
      );

      const res = await request(server).get('/api/promocode/active');

      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  })

});
