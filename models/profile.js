const mongoose = require('mongoose')
const Schema = mongoose.Schema

var profileSchema = new Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);