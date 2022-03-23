const mongoose = require("mongoose");
const Product = mongoose.model(
  "Product",
  new mongoose.Schema(
    {
      selection: Boolean,
      name: String,
      price: Number,
      description: String,
      online: Boolean,
      stock: Number,
      image: String,
      ref: String,
      feature: String,
      tags: Array,
      categoryId: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Category",
        },
      ],
      subCategoryId: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "SubCategory",
        },
      ],
    },
    {
      timestamps: true,
    }
  )
);
module.exports = Product;
