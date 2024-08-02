const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const countryRoutes = require('./routes/countryRoutes');
const weatherRoutes = require('./routes/weatherRoutes');

// Initialize express app
const app = express();
const PORT = 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
//app.use(express.json());

// Routes
app.use('/country', countryRoutes);
app.use('/weather', weatherRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
