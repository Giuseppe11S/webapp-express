const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movieController');
const cors = require('cors');


router.use(cors({
  origin: 'http://localhost:5176'
}));

router.get('/', moviesController.indexPost);
router.get('/:id', moviesController.showPost);


module.exports = router;
