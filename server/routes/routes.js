const router = require('express').Router();

// Pass controller functions in as they are built
router.get('/questions', );
router.post('/questions', );
router.get('/questions/:question_id/answers', );
router.post('/questions/:question_id/answers', );
router.put('/questions/:question_id/helpful', );
router.put('/questions/:question_id/report', );
router.put('/answers/:answer_id/helpful', );
router.put('/answers/:answer_id/report', );

module.exports = router;