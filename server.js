// Import Required Modules and Set-up Express App
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000; //Heroku or local port

//Static HTML Middleware
app.use(express.static('app/public'))

//Body Parser
app.use(bodyParser.json());

//TODO: Import Routes

//Listen for connections
app.listen(PORT, () => {
    console.log(`Now listening for requests at http://localhost:${PORT}`);
});