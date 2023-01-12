const express = require('express');
const router = express.Router();
const profilController = require('../controller/profile');

router.post('/', profilController.createProfil);
router.get('/', profilController.allData);
router.get('/:id', profilController.dataId);
router.put('/:id', profilController.updateData);
router.delete('/:id', profilController.delData);
module.exports = router;