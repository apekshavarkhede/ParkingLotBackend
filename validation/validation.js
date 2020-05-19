/****************************************************************************************************
 *  @Purpose        : Add validation for the user input
 *  @file           : validation.js
 *  @overview       : validate the user input
 *  @author         : APEKSHA VARKHEDE
 *  @since          : 12/5/2020
 ***************************************************************************************************/
const { body } = require('express-validator')

exports.validate = () => {
    return [
        body('firstName', 'Invalid firstName').exists().isLength({ min: 3 }, { max: 10 }),
        body('lastName', 'Invalid lastName').exists().isLength({ min: 3 }, { max: 10 }),
        body('userEmail', 'Invalid email').exists().isEmail(),
        body('password', 'Invalid Password').isLength({ min: 8 }),
        body('role', 'Please enter value between [Police, Driver, Owner, Security]').exists().isIn(['Police', 'Driver', 'Owner', 'Security'])
    ]
}