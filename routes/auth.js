const express = require('express');
const router = express.Router();
const auth = require('../controller/auth');
const userController = require('../controller/user');

router.post('/login', auth.login);
router.post('/register', userController.created);


module.exports = router;