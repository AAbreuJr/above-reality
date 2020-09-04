const Gallery = require('../models/gallery')

module.exports = {
  index,
}

function index(req, res) {
  Gallery.find({})
  .then((gallery) => {
    res.render('gallery/index', {
      user: req.user,
    })
  })
}