const { db, DataTypes } = require('../database');
const answers = require('./answers.js');

const Photos = db.define('photos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  answer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'answers',
      key: 'id'
    }
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

module.exports.Photos = Photos;