const express = require('express');
const router = express.Router();
const kloterController = require('../controller/kloter');

router.post('/add', kloterController.addKloter);

module.exports = router;