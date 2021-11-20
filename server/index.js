const { db } = require('../database');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const router = require('./routes/routes.js');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/qa', router);

const PORT = 3000;

db.sync().then(() => {
  Object.keys(db.models).forEach(key => {
    if ('associate' in db.models[key]) {
      console.log('Key: ', key);
      db.models[key].associate(db.models);
    }
  });
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
