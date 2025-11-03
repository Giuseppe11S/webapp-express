const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movieController');

router.get('/', moviesController.indexPost);
router.get('/:id', moviesController.showPost);


module.exports = router;
