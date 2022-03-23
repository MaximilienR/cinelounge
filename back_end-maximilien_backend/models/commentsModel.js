const mongoose = require("mongoose");
const Comments = mongoose.model(
  "Comments",
  new mongoose.Schema(
    {
      content: String,
      customerId: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    },
    {
      timestamps: true,
    }
  )
);
module.exports = Comments;

// redefinir objectID
