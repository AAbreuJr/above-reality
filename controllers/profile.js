const Profile = require('../models/profile')

module.exports = {
  index,
}

function index(req, res) {
  Profile.find({})
  .then((profile) => {
    res.render('profile/index', {
      title: 'Profile Page',
      user: req.user,
    })
  })
}
