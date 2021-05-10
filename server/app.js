const express = require('express');
const app = express();

app.get('/beers', (req, res, next) => {
    const beers = require("./beers.json")
    res.json(beers);
});

app.listen(5555, () => {
    console.log('Server listening on Port 5555');
});