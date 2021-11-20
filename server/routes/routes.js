const router = require('express').Router();
const controller = require('../../controllers')

// Pass controller functions in as they are built
router.get('/questions', controller.questions.get);
router.post('/questions', );
router.get('/questions/:question_id/answers', controller.answers.get);
router.post('/questions/:question_id/answers', );
router.put('/questions/:question_id/helpful', );
router.put('/questions/:question_id/report', );
router.put('/answers/:answer_id/helpful', );
router.put('/answers/:answer_id/report', );

module.exports = router;