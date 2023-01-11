const express = require('express');
const router = express.Router();
const kloterController = require('../controller/kloter');

router.post('/', kloterController.addKloter);
router.put('/:id', kloterController.updateKloter);
router.get('/', kloterController.allData);
router.get('/:id', kloterController.dataId);
router.delete('/:id', kloterController.delData);

module.exports = router;