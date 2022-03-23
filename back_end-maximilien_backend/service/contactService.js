//page test
var nodemailer = require('nodemailer');

module.exports.sendMail= function(messageOptions) {


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'testeprojet970@gmail.com',
    pass: 'azerty1234.'
  }
});


transporter.sendMail(messageOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});}
 