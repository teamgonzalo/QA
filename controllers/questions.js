const models = require('../models');

module.exports = {
  // Still needs nested answers object
  get: (req, res) => {
    let page = req.body.page || 1;
    let count = req.body.count || 5;
    models.questions.getQuestions(page, count, req.body.product_id)
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

  }
}