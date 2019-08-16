const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  Beers.find()
    .then(allBeers => res.json(Beers))
    .catch(err => console.log("Error", err));
});

router.get("/:id", (req, res) => {
  Beer.findById(req.params.id)
    .then(theBeer => res.json(theBeer))
    .catch(err => console.log("Error", err));
});

router.get("/random", (req, res) => {
  Beer.findOne(req.params.id)
    .then(randomBeer => res.json(randomBeer))
    .catch(err => console.log("Error", err));
});

router.post("/new", (req, res) => {
  Beer.create(req.body)
    .then(theNewBeer => res.json(theNewBeer))
    .catch(err => console.log("Error", err));
});

router.get("/search?q=", (req, res) => {
  Beer.findOne(req.params.id)
    .then(searchBeer => res.json(searchBeer))
    .catch(err => console.log("Error", err));
});
