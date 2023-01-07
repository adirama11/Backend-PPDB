const express = require('express');
const router = express.Router();
const profilController = require('../controller/profile');

router.post('/register', profilController.createProfil);
router.get('/', profilController.allData);
router.get('/:id', profilController.dataId);
router.put('/:id', profilController.updateData);

module.exports = router;