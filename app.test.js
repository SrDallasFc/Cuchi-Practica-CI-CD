const request = require('supertest');
const app = require('./app');

describe('Pruebas unitarias para las rutas HTTP', () => {
  it('GET / debe responder con status 200 y mensaje de confirmación', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('status', 'OK');
  });
});