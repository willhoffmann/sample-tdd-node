const supertest = require('supertest');

const app = require('../../src/app');
const factory = require('../utils/factories');

const request = supertest(app);

describe('User', () => {
  it('should be able to create user', async () => {
    const user = await factory.attrs('User');

    const response = await request.post('/v1/users').send(user);

    expect(response.status).toBe(201);
  });

  it('should not be able to create user with duplicate email', async () => {
    const user = await factory.attrs('User');

    await request.post('/v1/users').send(user);

    const response = await request.post('/v1/users').send(user);

    expect(response.status).toBe(400);
  });
});
