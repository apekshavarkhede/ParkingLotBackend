var userService = require('../Service/userService')

class UserController {
    registerControl(request, response) {
        let responseResult = {};
        try {
            let userData = {
                "firstName": request.body.firstName,
                "lastName": request.body.lastName,
                "userEmail": request.body.userEmail,
                "password": request.body.password
            }

            userService.registerUserService(userData, (err, result) => {
                if (err) {
                    responseResult.err = err;
                    responseResult.status = false;
                    response.status(500).send(responseResult)
                }
                else {
                    responseResult.data = result;
                    responseResult.status = true;
                    response.status(200).send(responseResult)
                }
            })
        } catch (error) {
            responseResult.error = error;
            responseResult.status = false;
            response.status(500).send(responseResult)
        }
    }

    async loginController(request, response) {
        let responseResult = {};
        try {
            let userData = {
                "userEmail": request.body.userEmail,
                "password": request.body.password
            }
            await userService.loginServices(userData)
                .then((res) => {
                    response.send(res)
                }).catch((err) => {
                    response.send(err)
                })
        } catch (error) {
            responseResult.error = error;
            responseResult.status = false;
            response.status(500).send(responseResult)
        }
    }
}

module.exports = new UserController;