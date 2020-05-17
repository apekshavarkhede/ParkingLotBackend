/****************************************************************************************************
 *  @Purpose        : it allows to use the expresss, mongoose and start the server  
 *  @file           : server.js
 *  @overview       : it uses to start the server port and to pass all  the requests through the 
 *                     middleware and connects the front end and backend
 *  @author         : APEKSHA VARKHEDE
 *  @since          : 12/5/2020
 ***************************************************************************************************/

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongooseConnetion = require('./config/config');
var swaggerUi = require('swagger-ui-express')
var router = require('./Routes/routes')
var swaggerDocument = require('./Swagger/swagger.json')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
require('dotenv').config()
app.use('/', router);

app.get('/', (req, res) => {
    res.json({ "message": "Welcome" });
});

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(3000, (err) => {
    if (err)
        throw err;
    console.log('server is listening on port 3000');
});

module.exports = app

