const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { sendMail } = require("../service/mailService");
const ObjectID = require("mongoose").Types.ObjectId;
global.crypto = require("crypto");

exports.signup = (req, res) => {
  const token = crypto.randomBytes(16).toString("hex");
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    tokenCheckMail: token,
    isVerified: false,
    password: bcrypt.hashSync(req.body.password, 8),
  });
  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    let linkConfirm = `http://localhost:3000/check/${token}`;

    const msg = {
      from: `testeproject@gmail.com`,
      to: user.email,
      subject: `mail de confirmation`,
      text:
        `bonjour Mr` +
        ` ` +
        user.lastName +
        ` ` +
        `l'équipe cinélounge vous remercie pour votre inscription et vous dit à très bientôt sur notre cine ` +
        `Veuillez confirmer votre compte en cliquant sur le lien suivant :${linkConfirm}`,
    };
    sendMail(msg);

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles },
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          user.roles = roles.map((role) => role._id);
          user.save((err) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            res.send({ message: "User was registered successfully!" });
          });
        }
      );
    } else {
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        user.roles = [role._id];
        user.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          res.send({ message: "User was registered successfully!" });
        });
      });
    }
  });
};
exports.signin = (req, res) => {
  User.findOne({
    email: req.body.email,
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      console.log(user);
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }
      console.log(user.roles);
      var token = jwt.sign({ id: user.id, role: user.roles }, config.secret, {
        expiresIn: 86400, // 24 hours
      });
      var authorities = [];
      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }
      res.status(200).send({
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        roles: authorities,
        accessToken: token,
      });
    });
};
exports.updatePassword = (req, res) => {
  User.findOne({
    email: req.body.email,
  }).exec((err, user) => {
    console.log(req.body);
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }
    var passwordIsValid = bcrypt.compareSync(
      req.body.passwordNow,
      user.password
    );
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }
    try {
      User.findByIdAndUpdate(
        user.id,
        {
          $set: {
            password: bcrypt.hashSync(req.body.confirmPassword, 8),
          },
        },
        (err, docs) => {
          if (!err) return res.send(docs);
          else return res.status(400).send(err);
        }
      );
    } catch (error) {
      console.log("Update Password failed : " + error);
    }
  });
};

exports.checkMail = async (req, res) => {
  try {
    const userCheck = await User.findOne({ tokenCheckMail: req.params.token });
    if (userCheck) {
      const update = { tokenCheckMail: null, isVerified: true };
      const user = await User.findOneAndUpdate(
        {
          tokenCheckMail: req.params.token,
        },
        update
      );
      user.save();
    }
    // req.flash("error", "Le Token n'est pas valide !");
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
};
//updae user

exports.updateUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  try {
    await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },

      (err, docs) => {
        if (!err) return res.send(docs);
        else return res.status(400).send(err);
      }
    ).clone();
  } catch (error) {
    console.log(error);
  }
};
