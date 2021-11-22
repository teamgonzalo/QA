const models = require('../models');

module.exports = {
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
    // Create new date and convert to UNIX formatting
    let date = new Date().getTime();
    models.questions.addQuestion(req.body.product_id, req.body.body, req.body.name, req.body.email, date)
      .then(() => {
        res.status(201).send('Question submitted.');
      })
      .catch(err => {
        console.log('Question posting error: ', err);
      })
  },

  helpful: (req, res) => {

  },

  report: (req, res) => {

  }
}