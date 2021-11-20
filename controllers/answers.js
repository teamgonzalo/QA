const models = require('../models');

module.exports = {
  get: (req, res) => {
    let page = req.body.page || 1;
    let count = req.body.count || 5;
    models.answers.getAnswers(req.params.question_id, page, count)
      .then(data => {
        let response = {
          question: req.params.question_id,
          page: page - 1,
          count: count,
          result: data
        };
        res.send(response);
      })
      .catch(err => {
        console.log('Get Answers Error: ', err);
      })
  }
};