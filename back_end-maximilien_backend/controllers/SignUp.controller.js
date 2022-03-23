const User = require("../models/userModel");
const ObjectID = require("mongoose").Types.ObjectId;

//recuparation des données
module.exports.SignUp = async (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });
  console.log(req.body);

  //renvois une reponse selon le cas.
  try {
    const user = await newUser.save();
    return res.status(201).json(user);
  } catch (err) {
    return res.status(400).send(err);
  }
};