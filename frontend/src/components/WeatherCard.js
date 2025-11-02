import React from 'react';
import './WeatherCard.css';

function WeatherCard({ data }) {
  const { location, current } = data;

  return (
    <div className="weather-card">
      <div className="location-info">
        <h2 className="city-name">{location.name}</h2>
        <p className="country">{location.country}</p>
        <p className="local-time">{new Date(location.localtime).toLocaleString()}</p>
      </div>

      <div className="weather-main">
        <div className="temperature-section">
          <div className="temp-display">
            <span className="temp-value">{Math.round(current.temp_c)}</span>
            <span className="temp-unit">°C</span>
          </div>
          <p className="temp-fahrenheit">{Math.round(current.temp_f)}°F</p>
        </div>

        {current.condition && (
          <div className="condition-section">
            {current.condition.icon && (
              <img 
                src={current.condition.icon} 
                alt={current.condition.text}
                className="weather-icon"
              />
            )}
            <p className="condition-text">{current.condition.text}</p>
          </div>
        )}
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Feels Like</span>
          <span className="detail-value">{Math.round(current.feelslike_c)}°C</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{current.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">{current.wind_kph} km/h</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
