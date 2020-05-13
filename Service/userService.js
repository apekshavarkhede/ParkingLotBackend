const userModel = require('../Model/userModel')
var bcrypt = require('bcrypt');


class UserServices {

    hashpassword(password) {
        return bcrypt.hashSync(password, 10)
    }

    async  registerUserService(data, callback) {
        try {
            let checkUserIsRegister = await userModel.findOne({ userEmail: data.userEmail })
            if (checkUserIsRegister != null) {
                callback("Email is Already Register")
            }
            if (checkUserIsRegister == null) {
                data.password = this.hashpassword(data.password)
                let userData = new userModel(data)
                userData.save((err, result) => {
                    if (err) {
                        callback(err)
                    }
                    if (result) {
                        callback(null, { "sucess": true, "message": "User Register Sucessfully" })
                    }
                })
            }
        } catch (err) {
            callback(err)
        }
    }

    async loginServices(data) {

    }

}
module.exports = new UserServices;