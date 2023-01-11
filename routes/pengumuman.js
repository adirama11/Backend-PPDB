const express = require('express');
const router = express.Router();
const pengumumanCotroller = require('../controller/pengumuman');

router.post('/', pengumumanCotroller.createData);
module.exports = router;