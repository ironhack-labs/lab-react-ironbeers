const express = require("express")
const router = express.Router()
const User = require("../models/User")
const passport = require("passport")

//middlewares
function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.status(401).json(false)
  }
}

//isAuth
router.get("/isauth", isAuth, (req, res, next) => {
  res.status(200).json(true)
})

//signup
router.post("/signup", (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(e => next(e))
})
//login
router.post("/login", passport.authenticate("local"), (req, res, next) => {
  res.status(200).json(req.user)
})
//private

router.get("/private", isAuth, (req, res, next) => {
  res.status(200).json({ message: "Lo lograste! puedes ver" })
})

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index")
})

module.exports = router
