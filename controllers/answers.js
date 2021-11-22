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
  },

  post: (req, res) => {
    let date = new Date().getTime();
    models.answers.addAnswers(req.params.question_id, req.body.body, req.body.name, req.body.email, date, req.body.photos)
      .then(() => {
        res.status(201).send('Answers submitted.');
      })
      .catch(err => {
        console.log('Answer posting error: ', err);
      })
  },

  helpful: (req, res) => {
    models.answers.markHelpful(req.param.answer_id)
      .then(() => {
        res.status(204).send('Answer marked helpful.');
      })
      .catch(err => {
        console.log('Answer-Helpful Error: ', err);
      })
  },

  report: (req, res) => {
    models.answers.reportAnswer(req.param.answer_id)
      .then(() => {
        res.status(204).send('Answer reported.');
      })
      .catch(err => {
        console.log('Answer-Reported Error: ', err);
      })
  }
};