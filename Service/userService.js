const userModel = require('../Model/userModel')

class UserServices {

    registerUserService(data, callback) {
        try {
            let userData = new userModel(data)
            userData.save((err, result) => {
                if (err) {
                    callback(err)
                }
                if (result) {
                    callback(null, { "sucess": true, "message": "User Register Sucessfully" })
                }
            })
        } catch (err) {
            callback(err)
        }
    }

}
module.exports = new UserServices;