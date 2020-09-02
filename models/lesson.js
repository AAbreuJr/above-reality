const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  video: String
});

module.exports = mongoose.model("Lesson", lessonSchema);