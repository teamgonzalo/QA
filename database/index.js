const { Sequelize, DataTypes } = require('sequelize');
const info = require('./config.js');

const db = new Sequelize('sdc', info.username, info.password, {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  define: {
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'created_at', 'updated_at']
      }
    }
  },
  logging: false
});

module.exports = {
  db: db,
  DataTypes: DataTypes,
};