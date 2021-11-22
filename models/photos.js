const { db, DataTypes } = require('../database');
const models = require('./index.js');

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
}, {underscored: true, timestamps: false});

Photos.associate = (models) => {
  Photos.belongsTo(models.questions, {
    foreignKey: 'answer_id',
  })
}

module.exports = {
  Photos: Photos,
}