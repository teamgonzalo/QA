const { db } = require('../database');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const router = require('./routes/routes.js');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/', router);

const PORT = 3000;

db.sync().then(() => {
  Object.keys(db.models).forEach(key => {
    if ('associate' in db.models[key]) {
      db.models[key].associate(db.models);
    }
  });
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
})
  .catch(err => {
  console.log('DB sync error: ', err);
  });
