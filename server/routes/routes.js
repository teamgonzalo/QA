const router = require('express').Router();
const controller = require('../../controllers')

router.get('/qa/questions', controller.questions.get);
router.post('/qa/questions', controller.questions.post);
router.get('/qa/questions/:question_id/answers', controller.answers.get);
router.post('/qa/questions/:question_id/answers', controller.answers.post);
router.put('/qa/questions/:question_id/helpful', controller.questions.helpful);
router.put('/qa/questions/:question_id/report', controller.questions.report);
router.put('/qa/answers/:answer_id/helpful', controller.answers.helpful);
router.put('/qa/answers/:answer_id/report', controller.answers.report);

router.get('/loaderio-331e444bf3605b12d37e832e20694d4f', ((req, res) => {
  res.send('loaderio-331e444bf3605b12d37e832e20694d4f');
}));

module.exports = router;
