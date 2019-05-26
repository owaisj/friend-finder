//Import Node modules
const express = require('express');
const path = require('path');

const router = express.Router();

//Root - GET/Read
router.get('/', function(request, response){
    console.log(path.join(__dirname, "../public/home.html"));
    response.sendFile(path.join(__dirname, "../public/home.html"));
})

module.exports = router;