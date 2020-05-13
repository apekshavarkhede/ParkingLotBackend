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

var user = mongoose.model('User', userSchema)

class UserModel {

    hashpassword(password) {
        return bcrypt.hashSync(password, 10)
    }

    async search(data) {
        return await user.findOne(data);
    }

    async registerUser(data, callback) {
        try {
            data.password = this.hashpassword(data.password)
            var userData = new user(data);
            userData.save((err, result) => {
                if (err) {
                    callback(err)
                }
                if (result) {
                    callback(null, { "sucess": true, "message": "User Register Sucessfully" })
                }
            })
        } catch (error) {
            callback(error)
        }
    }
}
module.exports = new UserModel
