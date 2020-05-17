/****************************************************************************************************
 *  @Purpose        : Define Url of database
 *  @file           : userService.js
 *  @author         : APEKSHA VARKHEDE
 *  @since          : 12/5/2020
 ***************************************************************************************************/
var mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
   .then(() => {
      console.log("Sucessfully connected to the database");
   }).catch((err) => {
      console.log("Error while connecting to database", err)
      process.exit();
   })

module.exports = { mongoose }