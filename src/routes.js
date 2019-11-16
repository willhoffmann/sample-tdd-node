const routes = require('express').Router();

routes.get('/', (req, res) =>
  res.json({ message: 'No API key found in request' })
);

module.exports = routes;
