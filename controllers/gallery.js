const Gallery = require('../models/gallery')

module.exports = {
  index,
  show
}

function show(req, res) {
  Gallery.findById(req.params.id)
  .then((gallery) => {
    res.render('gallery/show', {
      title: 'Gallery',
      user: req.user,
      gallery
    })
  })
}

function index(req, res) {
  Gallery.find({})
  .then((gallery) => {
    res.render('gallery/index', {
      title: 'Gallery Page',
      user: req.user,
    })
  })
}