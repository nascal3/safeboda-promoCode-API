const request = require('supertest');
const Promo = require("../../../models/promo_code");
let server;

describe('/api/promocode', () => {
  beforeEach(() => {
    server = require('../../../app');
    Promo.destroy({
      where: {
        code: "code"
      }
    });
  });

  afterEach(() => {
    server.close();
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
  })

});
