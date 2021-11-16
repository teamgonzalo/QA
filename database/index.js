const { Sequelize } = require('sequelize');
const info = require('./config.js');

const sequelize = new Sequelize('sdc', info.username, info.password, {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432
});