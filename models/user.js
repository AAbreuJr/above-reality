const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const completedLessonSchema = new Schema({
  title: String,
  released: Date
}, {
  timestamps: true
})


const userSchema = new Schema(
  {
    name: String,
    alias: String,
    email: String,
    avatar: String,
    googleId: String,
    bio: String,
    watchList: [completedLessonSchema]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
