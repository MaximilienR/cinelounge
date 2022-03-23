const mongoose = require("mongoose");
const Discount = mongoose.model(
  "Discount",
  new mongoose.Schema({
    percent: Number,
  })
);
module.exports = Discount;
