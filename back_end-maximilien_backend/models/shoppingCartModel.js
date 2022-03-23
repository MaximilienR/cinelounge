const mongoose = require("mongoose");
const ShoppingCart = mongoose.model(
  "ShoppingCart",
  new mongoose.Schema({
    customerId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    products: [
      {
        list: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: Number,
      },
    ],
  })
);
module.exports = ShoppingCart;
