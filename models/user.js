const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const completedSchema = new Schema({
  title: String,
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
    watchList: [completedSchema]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
