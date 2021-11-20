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
}, {underscored: true, timestamps: false});

Answers.associate = (models) => {
  Answers.belongsTo(models.questions, {
    foreignKey: 'question_id',
  }),
  Answers.hasMany(models.photos)
}

module.exports = {
  Answers: Answers,
  getAnswers: (question_id, page, count) => {
    return Answers.findAll({
      attributes: {
        exclude: ['question_id', 'reported', 'answerer_email', 'questionId']
      },
      where: {
        question_id: question_id,
        reported: 0
      },
      include: [{
        model: models.photos.Photos
      }],
      offset: count * (page - 1),
      limit: count
    })
  },

  addAnswers: (question_id, body, name, email, date, photos) => {
    return Answers.create({
      question_id: question_id,
      body: body,
      answerer_name: name,
      answerer_email: email,
      date_written: date,
      photos: photos,
      reported: 0,
      helpful: 0
    })
  }
};
