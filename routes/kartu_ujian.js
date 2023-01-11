const express = require('express');
const router  = express.Router();
const kartuController = require('../controller/kartu_ujian');

router.post('/', kartuController.createKartu);

module.exports = router;