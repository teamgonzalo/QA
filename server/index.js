var express = require('express');
var db = require('../database/index.js');
var app = express();

app.use(express.json());

let PORT = 3000;

app.get('/qa/questions', (req, res) => {
  db.questions.findAll({limit: 10})
    .then(data => {
      console.log('Hello There!');
      res.send(data);
    })
    .catch(err => {
      console.log('Questions get error: ', err);
    })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})