let mongoose = require('mongoose')
let Schema = mongoose.Schema
let passportLocalMongoose = require('passport-local-mongoose')


let userSchema = new Schema({
  username: {
    type:String,
    unique: true,
    required: true
  },
  email: {
    type:String,
    unique: true,
    required: true
  }
},{
  timestamps:true,
  versionKey:false
})


userSchema.plugin(passportLocalMongoose,{usernameField:"email"})

module.exports = mongoose.model('User', userSchema)