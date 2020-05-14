var express = require('express');
var router = express.Router();
const userController = require('../Controller/userController')

router.post('/register', userController.registerControl)
router.post('/login',userController.loginController)
module.exports = router;
