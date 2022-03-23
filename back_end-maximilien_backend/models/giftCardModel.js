const mongoose = require("mongoose");
const GiftCard = mongoose.model(
  "GiftCard",
  new mongoose.Schema({
    amount: Number,
  })
);
module.exports = GiftCard;
