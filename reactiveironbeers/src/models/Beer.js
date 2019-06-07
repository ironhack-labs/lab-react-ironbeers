const mongoose = require('mongoose')
const Schema = mongoose.Schema

const beerSchema = new Schema({
    title: String,
    length: Number,
    inversions: Number,
    description: String,
    imageUrl: String
}, {
        timestamps: true
    })

const Coaster = mongoose.model('Coaster', coasterSchema)
module.exports = Coaster