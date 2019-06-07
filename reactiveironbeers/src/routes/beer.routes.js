const express = require('express')
const router = express.Router()

const Coaster = require('../models/coaster-model')

router.get('/getAllCoasters', (req, res) => {
    Coaster.find()
        .then(data => res.json(data))
        .catch(err => console.log('Error:', err))
})


router.get('/getOneCoaster/:id', (req, res) => {
    Coaster.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => console.log('Error:', err))
})

module.exports = router