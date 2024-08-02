const axios = require('axios');
const Country = require('../models/countryModel');

// Handle getting country data
exports.getCountryData = async (req, res) => {
  try {
    const { data } = await axios.get(`https://restcountries.com/v3.1/name/${req.params.name}`);
    const countryData = data[0];

    // Save country data to MongoDB
    await Country.findOneAndUpdate(
      { name: countryData.name.common },
      {
        name: countryData.name.common,
        capital: countryData.capital[0],
        population: countryData.population,
        latlng: countryData.latlng,
        flags: {
          svg: countryData.flags.svg,
          png: countryData.flags.png,
        },
      },
      { upsert: true, new: true }
    );

    res.json(countryData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching country data' });
  }
};
