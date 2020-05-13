const userModel = require('../Model/userModel')

class UserServices {

    async  registerUserService(data, callback) {
        try {
            let checkUserIsRegister = await userModel.findOne({ userEmail: data.userEmail })
            if (checkUserIsRegister != null) {
                callback("Email is Already Register")
            }
            if (checkUserIsRegister == null) {
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

}
module.exports = new UserServices;