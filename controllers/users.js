const User = require('../models/user');
const Lesson = require('../models/lesson');

module.exports = {
  index,
  update
};

function index(req, res) {
  User.find({})
  .then(users => {
    res.render('users/index', { user: req.user, users })
  })
}

function update(req, res) {
  User.findByIdAndUpdate(req.user._id, req.body, { new: true }).then(() => {
    res.redirect('/users/profile')
  })
}