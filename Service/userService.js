const userModel = require('../Model/userModel')

class UserServices {

    async registerUserService(data, callback) {
        try {
            let dataToFind = { userEmail: data.userEmail }
            let checkUserIsRegisterOrNot = await userModel.search(dataToFind)
            if (checkUserIsRegisterOrNot != null) {
                callback("Email already exists");
            }
            if (checkUserIsRegisterOrNot == null) {
                userModel.registerUser(data, (err, result) => {
                    if (err) {
                        return callback(err)
                    }
                    return callback(null, result)
                })
            }
        } catch (err) {
            callback(err)
        }
    }

}
module.exports = new UserServices;