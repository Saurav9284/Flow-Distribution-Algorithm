const request = require('supertest');
const app = require('../index');

describe('Astrologer Controller', () => {
  it('should adjust the flow for a specific astrologer', async () => {
    const astrologerId = '5fbb0d955fb7376baf593f0d'; 
    const res = await request(app)
      .put(`/astrologer/${astrologerId}/flow`)
      .send({ newRating: 7 });
      
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Flow adjusted successfully');
  });
});
