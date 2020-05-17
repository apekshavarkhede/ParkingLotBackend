/****************************************************************************************************
 *  @Purpose        : Buisness logic is written in this file
 *  @file           : userService.js
 *  @overview       : access data from controller, process it and send result of processing to controller
 *  @author         : APEKSHA VARKHEDE
 *  @since          : 12/5/2020
 ***************************************************************************************************/

const userModel = require('../app/Model/userModel')
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken')
var sendMail = require('../MailSender/sendMail')

class UserServices {

    hashpassword(password) {
        return bcrypt.hashSync(password, 10)
    }

    registerUserService(data, callback) {
        try {
            userModel.findOne({ userEmail: data.userEmail }, (result, error) => {
                if (error) {
                    callback(err)
                }
                if (result != null) {
                    callback("Email is Already Register")
                }
                if (result === null) {
                    data.password = this.hashpassword(data.password)
                    userModel.createUser(data, (error, result) => {
                        if (error) {
                            callback(error)
                        }
                        if (result) {
                            let tokenData = { "userEmail": data.userEmail }
                            let token = jwt.sign(tokenData, process.env.SECRETKEY)
                            let payload = { "userEmail": data.userEmail };
                            sendMail.sendEmail(token, payload, (err, resultOfSendingMail) => {
                                if (err) {
                                    callback(err)
                                }
                                else {
                                    callback(null, { "status": true, "message": "User Register Sucessfully....check ur mail" })
                                }
                            })
                        }

                    })
                }
            })
        } catch (err) {
            callback(err)
        }
    }

    async loginServices(data) {
        let checkUserIsRegister = await userModel.find({ userEmail: data.userEmail })
        if (checkUserIsRegister.length > 0) {
            let checkIsPasswordCorrect = bcrypt.compareSync(data.password, checkUserIsRegister[0].password)
            if (checkIsPasswordCorrect == true) {
                return ({ success: true, message: "login sucess" })
            }
            if (checkIsPasswordCorrect == false) {
                return ({ sucess: false, message: "wrong password" })
            }
        }
        return ({ sucess: false, message: "Email is not present" })
    }

}
module.exports = new UserServices;