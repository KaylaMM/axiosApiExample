const express = require('express');
const router  = express.Router();
const axios = require('axios');

/* GET home page */
router.get('/', (req, res, next) => {
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
    .then(response => {
    res.render('pokemon/pokemon-list')
  }).catch(err => next(err))
});

module.exports = router;

//Look at Marcos's code to compare and complete