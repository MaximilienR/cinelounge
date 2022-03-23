const mongoose = require("mongoose");
const CustomerAddress = mongoose.model(
  "CustomerAddress",
  new mongoose.Schema({
    streetNumber: String,
    street: String,
    floor: Number,
    zip: Number,
    city: String,
    country: String,
    additionalInfos: String,
    customer: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  })
);
module.exports = CustomerAddress;
