const express = require('express');
const router = express.Router();
const userController = require('../controller/user');

/* GET users listing. */
router.post('/', userController.created);
router.put('/:id', userController.updateData);
router.get('/:id', userController.siswaId);
router.get('/', userController.allSiswa);
router.delete('/:id', userController.delSiswa);
module.exports = router;
