const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../src/index');
const config = require('../src/config');

const token = jwt.sign({ sub: 'demo-user' }, config.jwtSecret);
const auth = { Authorization: `Bearer ${token}` };

describe('account-services routes', () => {
  it('returns a latest statement', async () => {
    const res = await request(app)
      .get('/accounts/ACC_867-5309/statement/latest')
      .set(auth);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('balance');
  });

  it('rejects unauthenticated requests', async () => {
    const res = await request(app).get('/accounts/ACC_867-5309/overview');
    expect(res.status).toBe(401);
  });
});
