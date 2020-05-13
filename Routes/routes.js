var express = require('express');
var router = express.Router();
const userController = require('../Controller/userController')

router.post('/register', userController.registerControl)
module.exports = router;
