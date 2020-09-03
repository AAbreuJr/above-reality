const User = require('../models/user');
const Lesson = require('../models/lesson')

module.exports = {
  index,
  showProfile,
  update,
  show,
  getName
};

function index(req, res) {
  User.find({})
  .then(users => {
    res.render('users/index', { user: req.user, users })
  })
}

function showProfile(req, res) {
  User.findById(req.user._id).populate('lessons').then((user) => {
    res.render('users/profile', { title: 'Profile Page', user})
})
}

function update(req, res) {
  User.findByIdAndUpdate(req.user._id, req.body, { new: true }).then(() => {
    res.redirect('/users/index')
  })
}

function show(req, res) {
  User.findById(req.params.id).then((userInfo) => {
    Lesson.find().then((lessons) => {
      res.render('users/show', {title: 'My Profile', userInfo, user: req.user, lessons})
    })
  })
}

function getName(req, res) {
  res.json(req.user.name)
}