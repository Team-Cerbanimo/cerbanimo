const router = require('express').Router();
const passport = require("../config/passport");
const checkAuth = require('../config/auth');
router.post('/login', passport.authenticate("local"), async (req, res) => {
    console.log("login back")
    res.json(req.user)
})
router.get('/api/auth/check', checkAuth, (req, res) => {
    res.json({ auth: true })
})


module.exports = router;