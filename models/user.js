var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  completed: {}
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);