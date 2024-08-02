const express = require('express');
const router = express.Router();
const countryController = require('../controllers/countryController');

// Route to get country data
router.get('/:name', countryController.getCountryData);

module.exports = router;
