const routes = require('express').Router();

const UserController = require('./UserController');

routes.route('/').post(UserController.store);

module.exports = routes;
