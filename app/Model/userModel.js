/****************************************************************************************************
 *  @Purpose        : Define schema 
 *  @file           : userModel.js
 *  @overview       : Define Schema and collection
 *  @author         : APEKSHA VARKHEDE
 *  @since          : 12/5/2020
 ***************************************************************************************************/
var mongoose = require('mongoose')
require('mongoose-type-email');


var userSchema = new mongoose.Schema({
    firstName: { type: String, required: [true, 'firstName required'], length: { min: 3, max: 10 } },
    lastName: { type: String, required: [true, 'lastname required'], length: { min: 3, max: 8 } },
    userEmail: { type: mongoose.SchemaTypes.Email, required: [true, 'invalid userEmail'] },
    password: { type: String, required: [true, 'password required'], length: { min: 8 } },
    role: {
        type: String,
        enum: ['Police', 'Driver', 'Owner', 'Security'],
        required: true
    }
},
    {
        timestamps: true
    }
)

var user = mongoose.model('user', userSchema)

class UserModel {

    findOne(dataToFind, callback) {
        user.findOne(dataToFind).then(res => {
            callback(res)
        }).catch(err => {
            callback(err)
        })
    }

    createUser(data, callback) {
        let userData = new user(data)
        userData.save((err, res) => {
            if (err) {
                callback(err)
            } if (res) {
                callback(null, res)
            }
        })
    }

    async find(dataToFind) {
        let result = await user.find(dataToFind)
        return result
    }
}


module.exports = new UserModel

