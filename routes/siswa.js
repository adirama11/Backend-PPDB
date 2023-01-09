const express = require('express');
const router = express.Router();
const userController = require('../controller/user');

/* GET users listing. */
router.post('/tambahData', userController.created);
router.put('/update/:id', userController.updateData);
router.get('/:id', userController.siswaId);
router.get('/', userController.allSiswa);
router.delete('/:id', userController.delSiswa);
module.exports = router;
