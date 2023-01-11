const express = require('express');
const router  = express.Router();
const kartuController = require('../controller/kartu_ujian');

router.post('/', kartuController.createKartu);
router.put('/:id', kartuController.updateKartu);
router.get('/', kartuController.allData);

module.exports = router;