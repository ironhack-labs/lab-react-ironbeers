const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// router.get ('/all',(req,res,next)=>{
//   res.render()
// })


module.exports = router;
