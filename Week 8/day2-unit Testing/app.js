
const express = require('express');
const app = express();

app.get('/products', (req, res) => {
    res.send('this is product')
})
module.exports = app;