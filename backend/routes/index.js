const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");

//Middle wares

function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({ message: "You haven't logged in yet." });
  }
}

//Sign up
router.post("/signup", (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(e => next(e));
});


//Login
router.post("/login", passport.authenticate("local"), (req, res, next) => {
  res.status(200).json(req.user);
});

//Privates
router.get("/private", isAuth, (req, res, next) => {
  res.status(200).json({ message: "Access granted: Clearance 1" });
});

//Logout

router.get("/logout", isAuth, (req, res, next) => {
  req.logout();
  res.status(200).json({ message: "Logout successful" });
});

module.exports = router;
