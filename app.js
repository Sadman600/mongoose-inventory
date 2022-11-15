const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();


app.use(express.json());
app.use(cors());

// Schema Design
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for this product"],
        trim: true,
        unique: [true, "Name must be unique"],
        minLength: [5, "Name at least 5 character"],
        maxLength: [20, "Name is too large"]
    },
});
app.get('/', (req, res) => {
    res.send('Route is working YaY!')
});

module.exports = app;