var nodemailer = require('nodemailer');
exports.sendEmail = (token, payload, callback) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    console.log("process.env.EMAIL", process.env.EMAIL);
    console.log("process.env.PASSWORD", process.env.PASSWORD);


    var mailOptions = {
        from: process.env.EMAIL,
        to: payload.userEmail,
        subject: 'Sending Email using Node.js',
        text: `${token}`
    };
    transporter.sendMail(mailOptions, function (error, info) {
        console.log("in mail sending", mailOptions)
        if (error) {
            console.log("err in mail sending", error)
            callback(error)
        } else {
            console.log("mail sent")
            callback(null, { data: "mail sent" })
        }
    });
}
