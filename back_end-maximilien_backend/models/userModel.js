const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    lastName: String,
    firstName: String,
    email: String,
    password: String,
    tokenCheckMail: String,
    isVerified: Boolean,
    address: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
      },
    ],
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
    rates: [
      {
        rate: Number,
        productRef: mongoose.ObjectId,
      },
    ],
  })
);
module.exports = User;

// User.pre("save", async function (next) {
//   const salt = await bcrypt.genSalt();
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });
