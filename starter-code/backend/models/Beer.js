const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const beerSchema = new Schema({
  name: String,
  tagline: String,
  description: String,
  image_url: String,
  contributed_by: String
}, {
  timestamps: true
});

const Beer = mongoose.model("Beer", beerSchema);
module.exports = Beer;