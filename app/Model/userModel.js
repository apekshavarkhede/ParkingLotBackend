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
                callback(res)
            }
        })
    }
}
let x = new UserModel
module.exports = x

