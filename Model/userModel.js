var mongoose = require('mongoose')
var bcrypt = require('bcrypt');
var sendMail = require('../MailSender/sendMail')
var jwt = require('jsonwebtoken')

var userSchema = new mongoose.Schema({
    firstName: { type: String, required: [true, 'firstName required'], length: { min: 3, max: 10 } },
    lastName: { type: String, required: [true, 'lastname required'], length: { min: 3, max: 8 } },
    userEmail: { type: String, required: [true, 'userEmail required'] },
    password: { type: String, required: [true, 'password required'], length: { min: 6, max: 10 } },
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema)

