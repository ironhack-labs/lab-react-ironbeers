const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

let userSchema = new Schema({
  username: String,
  email: String
}, {timestamps: true}) 

userSchema.plugin(passportLocalMongoose, {usernameField:"email"})

module.exports = mongoose.model("User", userSchema)