const Lesson = require('../models/lesson')

module.exports = {
  index,
  show
}

function show(req, res) {
  Lesson.findById(req.params.id)
  .then((lesson) => {
    res.render('lessons/show', {
      title: 'Lesson',
      user: req.user,
      lesson
    })
  })
}

function index(req, res) {
  Lesson.find({})
  .then((lessons) => {
    res.render('lessons/index', {
      title: 'Lesson Page',
      user: req.user,
    })
  })
}