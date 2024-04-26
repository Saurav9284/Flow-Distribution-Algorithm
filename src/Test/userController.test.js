const request = require('supertest');
const app = require('../index');

describe('User Controller', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/user/create')
      .send({ name: 'Test User'});
      
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body).toHaveProperty('name', 'Test User');
  });
});
