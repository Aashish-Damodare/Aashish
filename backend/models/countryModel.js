const mongoose = require('mongoose');

// Define Country Schema
const countrySchema = new mongoose.Schema({
  name: String,
  capital: String,
  population: Number,
  latlng: [Number],
  flags: {
    svg: String,
    png: String,
  },
});

// Create and export the Country model
const Country_1 = mongoose.model('Country', countrySchema);

module.exports = Country_1;
