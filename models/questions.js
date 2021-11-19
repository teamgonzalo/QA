const { db, DataTypes } = require('../database/index.js');

const Questions = db.define('questions', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  date_written: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  asker_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  asker_name: {
    type: DataTypes.STRING(50)
  },
  reported: {
    type: DataTypes.INTEGER
  },
  helpful: {
    type: DataTypes.INTEGER
  }
});

module.exports = {
  getQuestions: () => {
    return Questions.findAll({limit: 3});
  }
}
