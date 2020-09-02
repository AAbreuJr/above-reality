const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  picture: String,
});

const gallerySchema = new Schema({
    info: String,
    image: [imageSchema],
  });

module.exports = mongoose.model("Gallery", gallerySchema);