/****************************************************************************************************
 *  @Purpose        : Define schema 
 *  @file           : userModel.js
 *  @overview       : Define Schema and collection
 *  @author         : APEKSHA VARKHEDE
 *  @since          : 12/5/2020
 ***************************************************************************************************/
var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    userEmail: { type: String },
    password: { type: String },
    role: { type: String }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema)

