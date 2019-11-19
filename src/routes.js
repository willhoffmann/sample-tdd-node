const routes = require('express').Router();

// Routes
const UserRoute = require('./app/module/users/UserRoute');

routes.get('/', (req, res) =>
  res.json({ message: 'No API key found in request' })
);

routes.use('/v1/users', UserRoute);

module.exports = routes;
