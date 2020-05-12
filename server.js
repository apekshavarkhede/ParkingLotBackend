/****************************************************************************************************
 *  @Purpose        : it allows to use the expresss, mongoose and start the server  
 *  @file           : server.js
 *  @overview       : it uses to start the server port and to pass all  the requests through the 
 *                     middleware and connects the front end and backend
 *  @author         : APEKSHA VARKHEDE
 *  @since          : 12/5/2020
 ***************************************************************************************************/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const dbConfig = require('./config/config');

mongoose.connect(dbConfig.url, { useNewUrlParser: true })
    .then(() => {
        console.log("Sucessfully connected to the database");
    }).catch((err) => {
        console.log("Error while connecting to database", err)
        process.exit();
    })

app.get('/', (req, res) => {
    res.json({ "message": "Hello" });
});

app.listen(3000, (err) => {
    if (err)
        throw err;
    console.log('server is listening on port 3000');
});

