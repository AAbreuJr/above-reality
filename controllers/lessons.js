const Lesson = require('../models/lesson')

module.exports = {
  index,
}

function index(req, res) {
    Lesson.find({})
    .then((lesson) => {
      res.render('lessons/index', {
        user: req.user,
      })
    })
  }
