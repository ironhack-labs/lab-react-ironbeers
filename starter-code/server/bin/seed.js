const mongoose = require("mongoose");
const Beer = require("../models/Beer");
const beers = require("./../beers.json");

mongoose
  .connect('mongodb://localhost/lab-react-ironbeers-backend', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    start();
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

function start() {
      Beer.create(beers)
        .then(createdBeers => {
          process.exit(0);
        })
        .catch(error => {
          console.log(error);
        });
}