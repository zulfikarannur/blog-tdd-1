var router = require('express').Router()
var userControllers = require('../controllers/userControllers')

router.post('/signup', userControllers.signUp)
router.post('/signin', userControllers.signIn)

module.exports = router;
