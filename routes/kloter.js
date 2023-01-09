const express = require('express');
const router = express.Router();
const kloterController = require('../controller/kloter');

router.post('/add', kloterController.addKloter);
router.put('/update/:id', kloterController.updateKloter);
router.get('/', kloterController.allData);

module.exports = router;