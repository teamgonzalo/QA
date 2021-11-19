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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});