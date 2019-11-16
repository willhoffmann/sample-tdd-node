require('dotenv').config();

const dbConfig = require('../../src/config/Database');

beforeAll(() => {
  return dbConfig.connect();
});

beforeEach(() => {
  return dbConfig.truncate();
});

afterAll(() => {
  return dbConfig.disconnect();
});
