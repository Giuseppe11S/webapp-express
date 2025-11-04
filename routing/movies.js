const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const cors = require('cors');

router.use(cors({
  origin: 'http://localhost:5176'
}));

router.get('/', movieController.indexPost);
router.get('/:id', movieController.showPost);


module.exports = router;
