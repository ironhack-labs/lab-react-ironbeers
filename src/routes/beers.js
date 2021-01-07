// const express = require('express');
// const router = express.Router();
// const HeroModel = require('../models/Hero');

// router.get('/', (req, res, next) => {
//   HeroModel.find().then((heroDocuments) => {
//     res.status(200).json(heroDocuments);
//   });
// });

// router.get('/:id', (req, res, next) => {
//   HeroModel.findById(req.params.id).then((heroDocument) => {
//     res.status(200).json(heroDocument);
//   });
// });
// //Route is prefixed with /heroes
// router.post('/', (req, res, next) => {
//   HeroModel.create(req.body).then((heroDocument) => {
//     res.status(201).json(heroDocument);
//   });
// });

// module.exports = router;
