# Weather App

A modern weather application built with React and Express that displays current weather information for any city.

## Features

- 🌤️ Real-time weather data
- 🎨 Beautiful, responsive UI with gradient background
- 🔍 Search weather by city name
- 📊 Display temperature (Celsius & Fahrenheit), humidity, wind speed, and more
- ⚡ Fast and lightweight

## Tech Stack

**Frontend:**
- React 18
- Axios for API calls
- CSS3 with modern animations

**Backend:**
- Express.js
- Axios for external API calls
- CORS enabled
- Environment variables with dotenv

## Project Structure

```
wether app/
├── frontend/               # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SearchBar.js
│   │   │   ├── SearchBar.css
│   │   │   ├── WeatherCard.js
│   │   │   └── WeatherCard.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── backend/                # Express backend
│   ├── server.js
│   ├── .env.example
│   └── package.json
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
copy .env.example .env
```

4. Add your weather API key to the `.env` file:
```
PORT=5000
WEATHER_API_KEY=your_actual_api_key_here
```

5. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

## API Integration

The backend is ready to integrate with a weather API. Once you provide your weather API details:

1. Update the `WEATHER_API_KEY` in `backend/.env`
2. Modify the API endpoint in `backend/server.js` (line 27-28) to match your weather API provider's format

Example for WeatherAPI.com:
```javascript
const response = await axios.get(
  `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
);
```

## Usage

1. Enter a city name in the search bar
2. Click "Search" or press Enter
3. View the current weather information including:
   - Temperature (°C and °F)
   - Weather condition with icon
   - Feels like temperature
   - Humidity percentage
   - Wind speed

## Development

- Frontend runs on port 3000
- Backend runs on port 5000
- The React app proxies API requests to the backend

## Notes

- The app currently returns mock data until a valid weather API key is configured
- Make sure both frontend and backend servers are running simultaneously
- The frontend will automatically proxy API requests to `http://localhost:5000`

## Future Enhancements

- 5-day weather forecast
- Geolocation support
- Weather alerts
- Multiple city comparison
- Dark/Light theme toggle
- Historical weather data

## License

ISC
