const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Weather App API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      weather: '/api/weather?city=CityName'
    },
    status: 'running'
  });
});

// Weather API endpoint
app.get('/api/weather', async (req, res) => {
  try {
    const { city } = req.query;
    
    if (!city) {
      return res.status(400).json({ error: 'City parameter is required' });
    }

    const API_KEY = process.env.WEATHER_API_KEY;
    
    if (!API_KEY) {
      return res.status(500).json({ 
        error: 'Weather API key not configured',
        message: 'Please add WEATHER_API_KEY to your .env file'
      });
    }

    // Call OpenWeatherMap API
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const weatherData = response.data;
    
    // Transform OpenWeatherMap response to match frontend expectations
    const transformedData = {
      location: {
        name: weatherData.name,
        country: weatherData.sys.country,
        localtime: new Date().toISOString()
      },
      current: {
        temp_c: Math.round(weatherData.main.temp),
        temp_f: Math.round((weatherData.main.temp * 9/5) + 32),
        condition: {
          text: weatherData.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
        },
        humidity: weatherData.main.humidity,
        wind_kph: Math.round(weatherData.wind.speed * 3.6), // Convert m/s to km/h
        feelslike_c: Math.round(weatherData.main.feels_like),
        feelslike_f: Math.round((weatherData.main.feels_like * 9/5) + 32)
      }
    };

    res.json(transformedData);
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    
    if (error.response) {
      // API returned an error
      return res.status(error.response.status).json({ 
        error: 'Failed to fetch weather data',
        message: error.response.data.message || 'City not found or API error'
      });
    }
    
    res.status(500).json({ 
      error: 'Failed to fetch weather data',
      message: error.message 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
