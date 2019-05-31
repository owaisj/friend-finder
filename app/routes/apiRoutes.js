//Import Node modules
const express = require('express');
const path = require('path');

const router = express.Router();
const partners = require('../api/partners');

// GET/Read: Entire api
router.get('/partners', function(request, response){
    return response.json(partners);
})

//GET/Read
router.get('/partners/:type', (request, response) => {
    console.log(request.params.type);
    let match = '';
    for (let pokemon in partners) {
         if (partners[pokemon]['type'] === request.params.type) {
             match = partners[pokemon];
             break;
         }
    }
    response.json(match);
})

//TODO: POST route to handle incoming survey results (form)
router.post('/partners', function(request, response){
   console.log('User sent the MBTI of', request.body.type);
   let match = '';
   for (let pokemon in partners) {
        if (partners[pokemon]['type'] === request.body.type) {
            match = partners[pokemon];
            break;
        }
   }
   response.json(match);
})

module.exports = router;