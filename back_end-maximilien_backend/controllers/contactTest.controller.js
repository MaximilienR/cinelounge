const config = require("../config/auth.config");
const db = require("../models");
const { sendMail } = require("../service/contactService");
 
module.exports.contact= (req, res) => {
  const demand = [{  
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    mobil:req.body.mobil,
    message: req.body.message,
  }];
   
  
  //expediteur+contenu. 
  const question ={
    from:`testeproject970@gmail.com`,
    to:`testeproject970@gmail.com`,
    subject:`demande client`,
    text:demand[0].message 
  }
  console.log(demand[0].message)
  sendMail(question)}