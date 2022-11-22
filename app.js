const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const productRoute = require('./routes/product.route');

app.use(express.json());
app.use(cors());


app.use('/api/v1/product', productRoute);

module.exports = app;