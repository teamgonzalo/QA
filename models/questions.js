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

// Questions.associate = (models) => {
//   Questions.hasMany(models.answers, {
//     foreignKey: 'id'
//   })
// }

module.exports = {
  getQuestions: (page, count, product_id) => {
    return Questions.findAll({
      attributes: {
        exclude: ['product_id']
      },
      where: {
        product_id: product_id,
        reported: 0
      },
      offset: count * (page - 1),
      limit: count
    })
  }
}

// module.exports = {
//   getQuestions: (page, count, product_id) => {
//     return Questions.findAll({
//       attributes: {
//         exclude: ['product_id']
//       },
//       include: [{
//         model: 'models.answers',
//         required: true
//       }],
//       where: {
//         product_id: product_id,
//         reported: 0
//       },
//       offset: count * (page - 1),
//       limit: count
//     })
//   }
// }