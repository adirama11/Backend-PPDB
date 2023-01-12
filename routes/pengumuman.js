const express = require('express');
const router = express.Router();
const pengumumanCotroller = require('../controller/pengumuman');

router.post('/', pengumumanCotroller.createData);
router.put('/:id', pengumumanCotroller.updateData);
router.get('/:id', pengumumanCotroller.dataId);
router.delete('/:id', pengumumanCotroller.delData);
router.get('/', pengumumanCotroller.allData);

module.exports = router;