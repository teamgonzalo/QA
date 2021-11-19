const Questions = require('../models/questions.js');

module.exports = {
  get: (req, res) => {
    Questions.getQuestions()
      .then(data => {
        console.log('Questions Data: ', data);
        res.send(data);
      })
      .catch(err => {
        console.log('Questions Error: ', err);
      })
  },

  post: (req, res) => {

  }
}