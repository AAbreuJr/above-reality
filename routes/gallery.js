const router = require("express").Router();
const galleryCtrl = require("../controllers/gallery");

router.get('/', isLoggedIn, galleryCtrl.index);
router.get('/:id', isLoggedIn, galleryCtrl.show);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;