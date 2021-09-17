const express = require('express');

const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

const { saleRoute } =  require('../router');

app.use(cors());
app.use(bodyParser.json());

app.use('/sale', saleRoute)

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
