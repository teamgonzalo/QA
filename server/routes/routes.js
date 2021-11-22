const router = require('express').Router();
const controller = require('../../controllers')

router.get('/questions', controller.questions.get);
router.post('/questions', controller.questions.post);
router.get('/questions/:question_id/answers', controller.answers.get);
router.post('/questions/:question_id/answers', controller.answers.post);
router.put('/questions/:question_id/helpful', controller.questions.helpful);
router.put('/questions/:question_id/report', controller.questions.report);
router.put('/answers/:answer_id/helpful', controller.answers.helpful);
router.put('/answers/:answer_id/report', controller.answers.report);

module.exports = router;