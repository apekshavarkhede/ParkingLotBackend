var userService = require('../Service/userService')
const { validationResult } = require('express-validator')

class UserController {
    registerControl(request, response) {
        let responseResult = {};
        try {
            const error = validationResult(request);
            if (!error.isEmpty()) {
                response.status(422).send(error.array())
            }
            if (error.isEmpty()) {
                let userData = {
                    "firstName": request.body.firstName,
                    "lastName": request.body.lastName,
                    "userEmail": request.body.userEmail,
                    "password": request.body.password,
                    "role": request.body.role
                }
                userService.registerUserService(userData, (err, result) => {
                    if (err) {
                        responseResult.err = err;
                        responseResult.status = false;
                        response.status(400).send(responseResult)
                    }
                    else {
                        responseResult.data = result;
                        responseResult.status = true;
                        response.status(200).send(responseResult)
                    }
                })
            }
        } catch (error) {
            responseResult.error = error;
            responseResult.status = false;
            response.status(500).send(responseResult)
        }
    }

    async loginController(request, response) {
        let userData = {
            "userEmail": request.body.userEmail,
            "password": request.body.password
        }
        await userService.loginServices(userData)
            .then((res) => {
                let check = (res.success === true)
                if (check === true) {
                    response.status(200).send({ res })
                }
                if (check === false) {
                    response.status(400).send({ res })
                }
            }).catch((err) => {
                response.status(500).send({
                    message: "Server Error"
                })
            })
    }
}

module.exports = new UserController;