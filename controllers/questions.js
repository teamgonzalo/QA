const models = require('../models');

module.exports = {
  // Still needs nested answers object
  get: (req, res) => {
    let page = req.body.page || 1;
    let count = req.body.count || 5;
    models.questions.getQuestions(req.body.product_id, page, count)
      .then(data => {
        let response = {
          product_id: req.body.product_id,
          results: data
        }
        res.send(response);
      })
      .catch(err => {
        console.log('Err: ', err);
        res.sendStatus(404)
      })
  },

  post: (req, res) => {
    models.questions.addQuestion(req.body.product_id)
      .then(() => {
        res.status(201).send('Question submitted.');
      })
      .catch(err => {
        console.log('Question posting error: ', err);
      })
  }
}

// body	text	Text of question being asked
// name	text	Username for question asker
// email	text	Email address for question asker
// product_id	integer	Required ID of the Product for which the question is posted