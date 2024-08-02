const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

// Route to get weather data
router.get('/:city', weatherController.getWeatherData);

module.exports = router;
