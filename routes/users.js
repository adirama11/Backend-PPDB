const express = require('express');
const router = express.Router();
const userController = require('../controller/user');

/* GET users listing. */
router.post('/tambahData', userController.created);
router.put('/update/:id', userController.updateData);
router.get('/siswa/:id', userController.siswaId);
router.get('/siswa', userController.allSiswa);
router.delete('/siswa/:id', userController.delSiswa);
module.exports = router;
