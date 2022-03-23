const mongoose = require("mongoose");
const Order = mongoose.model(
  "Order",
  new mongoose.Schema({
    productList: [
      {
        list: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: Number,
      },
    ],
    orderAt: Date,
    orderStatus: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Status",
    },
    customerId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    reference: String,
    paymentMethod: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment",
      },
    ],
  })
);
module.exports = Order;
