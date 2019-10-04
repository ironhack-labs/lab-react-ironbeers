const express = require('express');
const router = express.Router();
const Beer = require("../models/Beer")

const selectionObject = {
  "_id": true,
  "name": true,
  "tagline": true,
  "image_url": true,
  "contributed_by": true
}

router.get('/all', (req, res, next) => {
  Beer
    .find()
    .select(selectionObject)
    .then(allTheBeers => res.json(allTheBeers))
});

router.get('/single/:id', (req, res, next) => {
  Beer
    .findById(req.params.id)
    .select(selectionObject)
    .then(allTheBeers => res.json(allTheBeers))
});

router.get('/random', (req, res, next) => {
  Beer
    .find()
    .select(selectionObject)
    .then(allTheBeers => {
      allTheBeers.sort((a, b) => (Math.random() > .5) ? -1 : 1)

      res.json(allTheBeers[0])
    })
});

router.get('/search', (req, res, next) => {
  var queryString = req.query.q
  var beerRegexp = new RegExp(queryString, "g");

  Beer
    .find({ name: beerRegexp })
    .select(selectionObject)
    .then(allTheBeers => res.json(allTheBeers))
});

router.post('/new', (req, res, next) => {
  Beer
    .create({ name: req.body.name, tagline: req.body.tagline, image_url: req.body.image_url, contributed_by: req.body.contributed_by })
    .then((newBeer) => {
      Beer
        .findById(newBeer._id)
        .select(selectionObject)
        .then(theNewBeer => res.json(theNewBeer))
    })
});


module.exports = router;