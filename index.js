const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Set up express app
const app = express();

var PORT = process.env.PORT || 4000;

//Connect to mongoDB
mongoose.connect('mongodb://sam:tester1@ds119422.mlab.com:19422/heroku_1sf98jr4');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

//Init body parser
app.use(bodyParser.json());

//Init routes
app.use('/api', require('./routes/api'));

//Error handling
 app.use(function(err, req, res, next){
    res.status(422).send({
        error: err.message
    });
 })

//Listen for request
app.listen(PORT, function () {
    console.log('Now listening for requests');
});