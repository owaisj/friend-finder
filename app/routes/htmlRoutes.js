//Import Node modules
const express = require('express');
const path = require('path');

const router = express.Router();

//Root - GET/Read
router.get('/', function(request, response){
    response.sendFile(path.join(__dirname, "../public/home.html"));
})

//Survey - GET/Read
router.get('/survey', function(request, response){
    response.sendFile(path.join(__dirname, "../public/survey.html"));
})

module.exports = router;