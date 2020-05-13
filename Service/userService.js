const userModel = require('../Model/userModel')

class UserServices {

    registerUserService(data, callback) {
        try {
            userModel.registerUser(data, (err, result) => {
                if (err) {
                    return callback(err)
                }
                return callback(null, result)
            })
        } catch (err) {
            callback(err)
        }
    }

}
module.exports = new UserServices;