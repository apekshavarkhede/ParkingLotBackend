/****************************************************************************************************
 *  @Purpose        : Sending mail to user
 *  @file           : sendMail.js
 *  @overview       : send mail to the user
 *  @author         : APEKSHA VARKHEDE
 *  @since          : 12/5/2020
 ***************************************************************************************************/
var nodemailer = require('nodemailer');
exports.sendEmail = (token, payload, callback) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    var mailOptions = {
        from: process.env.EMAIL,
        to: payload.userEmail,
        subject: 'Sending Email using Node.js',
        text: `${token}`
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            callback(error)
        } else {
            console.log("mail sent")
            callback(null, { data: "mail sent" })
        }
    });
}
