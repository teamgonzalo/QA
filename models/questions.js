const { db, DataTypes } = require('../database/index.js');
const models = require('./index.js');

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
  asker_email: {
    type: DataTypes.STRING(50)
  },
  reported: {
    type: DataTypes.INTEGER
  },
  helpful: {
    type: DataTypes.INTEGER
  }
}, {underscored: true, timestamps: false});

Questions.associate = (models) => {
  Questions.hasMany(models.answers)
}

module.exports = {
  Questions: Questions,
  getQuestions: (product_id, page, count) => {
    return Questions.findAll({
      attributes: {
        exclude: ['product_id']
      },
      include: [{
        model: models.answers.Answers,
        include:[models.photos.Photos]
      }],
      where: {
        product_id: product_id,
        reported: 0
      },
      offset: count * (page - 1),
      limit: count
    })
  },
  addQuestion: (product_id, body, name, email, date) => {
    return Questions.create({
      product_id: product_id,
      body: body,
      asker_name: name,
      asker_email: email,
      date_written: date,
      reported: 0,
      helpful: 0
    })
  },
  markHelpful: (question_id) => {
    return Questions.findOne({
      where: {
        id: question_id
      }
    })
    .then(data => {
      let helpful = data.helpful

      return Questions.update(
        {helpful: helpful + 1},
        {where : {
          id: question_id
        }}
      )
    })
    .catch(err => {
      console.log('Mark Question Helpful Error: ', err);
    })
  },
  reportQuestion: (question_id) => {
    return Questions.findOne({
      where: {
        id: question_id
      }
    })
    .then(data => {
      let reported = data.reported

      return Questions.update(
        {reported: reported + 1},
        {where : {
          id: question_id
        }}
      )
    })
    .catch(err => {
      console.log('Report Question Error: ', err);
    })
  }
}