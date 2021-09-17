const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors());


const { saleRoute } =  require('../router');

app.use('/sale', saleRoute)

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
