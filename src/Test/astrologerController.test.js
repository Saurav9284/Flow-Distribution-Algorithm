const request = require('supertest');
const app = require('../index');

describe('Astrologer Controller', () => {
  it('should create a new astrologer', async () => {
    const res = await request(app)
      .post('/astrologer/create')
      .send({ name: 'Test Astrologer', rating: 5 });
      
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body).toHaveProperty('name', 'Test Astrologer');
    expect(res.body).toHaveProperty('rating', 5);
  });
});
