const axios = require('axios');

// Handle getting weather data
exports.getWeatherData = async (req, res) => {
  try {
    const { data } = await axios.get(`https://api.weatherapi.com/v1/current.json?key=1174714de363415a95d124409243007&q=${req.params.city}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching weather data' });
  }
};
