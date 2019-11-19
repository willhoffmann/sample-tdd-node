const faker = require('faker');
const { factory } = require('factory-girl');

const UserModel = require('../../src/app/module/users/UserModel');

factory.define('User', UserModel, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

module.exports = factory;
