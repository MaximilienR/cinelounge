const mongoose = require("mongoose");
const Status = mongoose.model(
  "Status",
  new mongoose.Schema({
    nameStatus: String,
  })
);
module.exports = Status;
