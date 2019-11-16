require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const express = require('express');

const dbConfig = require('./config/Database');

const routes = require('./routes');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.database();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  database() {
    dbConfig.connect();
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
