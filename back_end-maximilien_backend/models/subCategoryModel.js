const mongoose = require("mongoose");
const SubCategory = mongoose.model(
  "SubCategory",
  new mongoose.Schema({
    name: String,
    image: String,
  })
);
module.exports = SubCategory;
