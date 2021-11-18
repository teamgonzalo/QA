const { Sequelize, DataTypes } = require('sequelize');
const info = require('./config.js');
const questions = require('../models/questions.js');
const answers = require('../models/answers.js');
const photos = require('../models/photos.js');

const db = new Sequelize('sdc', info.username, info.password, {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  define: {
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    }
  }
});

module.exports = {
  db: db,
  DataTypes: DataTypes,
  questions: questions,
  answers: answers,
  photos: photos
};