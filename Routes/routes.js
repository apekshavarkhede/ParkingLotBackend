/****************************************************************************************************
 *  @Purpose        : Define route
 *  @file           : routes.js
 *  @overview       : Define all api routes 
 *  @author         : APEKSHA VARKHEDE
 *  @since          : 12/5/2020
 ***************************************************************************************************/
var express = require('express');
var router = express.Router()
var validate = require('../app/Model/validation')
var userController = require('../Controller/userController')
router.post('/register', validate.validate(), userController.registerControl)
router.post('/login', userController.loginController)
module.exports = router;
