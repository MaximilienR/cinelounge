const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;
exports.checkDuplicateUserNameOrEmail = (req, res, next) => {
  // lastName
  User.findOne({
    lastName: req.body.lastName,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res.status(400).send({ message: "Failed! lastName is already in use!" });
      return;
    }
    // firstname
    User.findOne({
      firstName: req.body.firstName,
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (user) {
        res
          .status(400)
          .send({ message: "Failed! firstName is already in use!" });
        return;
      }
      // Email
      User.findOne({
        email: req.body.email,
      }).exec((err, user) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        if (user) {
          res.status(400).send({ message: "Failed! Email is already in use!" });
          return;
        }
 
         /*const msg ={
          from:`norepley@email.com`,
          to:user.email,
          subject:`mail de confirmation`,
          text:`l'équipe cinélouage vous remercie pour votre inscription et vous dit à très bien sur notre cine `
        } */
        next();
      });
    });
  });
};
exports.checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`,
        });
        return;
      }
    }
  }
  next();
};
// module.exports.verifySignUp = () =>{
//     checkDuplicateUsernameOrEmail,
//     checkRolesExisted
// };
