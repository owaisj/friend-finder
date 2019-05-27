//Import Node modules
const express = require('express');
const path = require('path');

const router = express.Router();
const partners = require('../api/partners');

// GET/Read: Entire api
router.get('/partners', function(request, response){
    return response.json(partners);
})


//TODO: POST route

module.exports = router;