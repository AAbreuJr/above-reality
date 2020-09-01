var express = require('express');
var router = express.Router();
const lessonsCtrl = require('../controllers/lessons');

router.get('/', isLoggedIn, lessonsCtrl.index)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;