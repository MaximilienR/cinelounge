const mongoose = require("mongoose");
const Category = mongoose.model(
  "Category",
  new mongoose.Schema({
    name: String,
    subCategories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
      },
    ],
  })
);
module.exports = Category;
