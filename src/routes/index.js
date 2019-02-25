const express = require('express');
const router  = express.Router();
const Beer = require("../../models/beer");

/* GET home page */
router.get('/', (req, res, next) => {
  Beer.find()
  .then(beers => res.status(200).json({data: beers}))
  .catch(err => res.status(500).json({data: err}));
});

router.post("/new", (req, res, next) => {
  const {name, color} = req.body;

  Beer.create({name, color})
  .then(beer => res.status(200).json({data: beer}))
  .catch(err => console.log(err));
})

module.exports = router;