const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonInfoSchema = new Schema({
  chapter: Number,
  lesson: String,
  message: String,
});

const lessonSchema = new Schema({
    title: String,
    videoUrl: String,
    completed: String,
    info: [lessonInfoSchema],
  });

module.exports = mongoose.model("Lesson", lessonSchema);