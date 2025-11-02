import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError('');
    setWeatherData(null);

    try {
      const response = await axios.get(`/api/weather?city=${encodeURIComponent(city)}`);
      setWeatherData(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch weather data. Please try again.');
      console.error('Error fetching weather:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Weather App</h1>
        <SearchBar onSearch={fetchWeather} loading={loading} />
        
        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}
        
        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading weather data...</p>
          </div>
        )}
        
        {weatherData && !loading && (
          <WeatherCard data={weatherData} />
        )}
      </div>
    </div>
  );
}

export default App;
