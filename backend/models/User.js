let mongoose = require("mongoose")
let Schema = mongoose.Schema
let passportLocalMongoose = require("passport-local-mongoose")

let userSchema = new Schema(
  {
    username: String,
    email: String
  },
  { timestamps: true }
)

userSchema.plugin(passportLocalMongoose, { usernameField: "email" })

module.exports = mongoose.model("User", userSchema)
