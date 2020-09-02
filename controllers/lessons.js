const Lesson = require('../models/lesson')

module.exports = {
  index,
}

function index(req, res) {
    Lesson.find({})
    .then((lessons) => {
      res.render('lessons/index', {
      })
    })
  }