const express = require('express');
const router = express.Router();
const { createWish, getWishes } = require('../controllers/wishController');

router.post('/', createWish);
router.get('/', getWishes);

module.exports = router;