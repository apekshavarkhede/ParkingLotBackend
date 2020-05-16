const { body } = require('express-validator/check')

exports.validate = () => {
    return [
        body('firstName', 'Invalid firstName').exists().isLength({ min: 3 }),
        body('lastName', 'Invalid lastName').exists().isLength({ min: 3 }),
        body('userEmail', 'Invalid email').exists().isEmail(),
        body('password', 'Invalid Password').isLength({ min: 8 }),
        body('role', 'Please enter value between [Police, Driver, Owner, Security]').exists().isIn(['Police', 'Driver', 'Owner', 'Security'])
    ]
}