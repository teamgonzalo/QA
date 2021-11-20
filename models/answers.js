const { db, DataTypes } = require('../database');
const models = require('./index.js');

const Answers = db.define('answers', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  question_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'questions',
      key: 'id'
    }
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  date_written: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  answerer_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  answerer_email: {
    type: DataTypes.STRING(50)
  },
  reported: {
    type: DataTypes.INTEGER
  },
  helpful: {
    type: DataTypes.INTEGER
  }
}, {underscored: true});

Answers.associate = (models) => {
  Answers.belongsTo(models.questions, {
    foreignKey: 'question_id',
  })
}

module.exports = {
  Answers: Answers,
  getAnswers: (question_id, page, count) => {
    return Answers.findAll({
      attributes: {
        exclude: ['question_id', 'reported', 'answerer_email']
      },
      where: {
        question_id: question_id,
        reported: 0
      },
      offset: count * (page - 1),
      limit: count
    })
  }
};
