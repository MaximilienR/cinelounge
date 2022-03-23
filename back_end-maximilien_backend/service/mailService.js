var nodemailer = require('nodemailer');

module.exports.sendMail = function(mailOptions) {


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'testeprojet970@gmail.com',
    pass: 'azerty1234.'
  }
});


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});}
 