const mongoose = require("mongoose");
const Payment = mongoose.model(
  "Payment",
  new mongoose.Schema({
    method: String,
  })
);
module.exports = Payment;
