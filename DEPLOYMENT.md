# Deployment Guide for Vercel

## Option 1: Deploy Frontend and Backend Separately (Recommended)

### Deploy Backend (API)
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure:
   - **Root Directory**: `backend`
   - **Framework Preset**: Other
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`
5. Add Environment Variables:
   - `WEATHER_API_KEY`: Your OpenWeatherMap API key
   - `PORT`: 5000
6. Deploy

### Deploy Frontend
1. Create another new project in Vercel
2. Import the same GitHub repository
3. Configure:
   - **Root Directory**: `frontend`
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`
4. Add Environment Variable:
   - `REACT_APP_API_URL`: Your backend Vercel URL (e.g., `https://your-backend.vercel.app`)
5. Deploy

### Update Frontend to Use Environment Variable
After deployment, you need to update the frontend code to use the backend URL from environment variables instead of the proxy.

## Option 2: Deploy as Monorepo (Current Setup)

With the current `vercel.json` configuration:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure:
   - **Root Directory**: Leave as root (`.`)
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `frontend/build`
   - **Install Command**: `npm install`
5. Add Environment Variables:
   - `WEATHER_API_KEY`: Your OpenWeatherMap API key
6. Deploy

## Important Notes

- **Environment Variables**: Make sure to add your `WEATHER_API_KEY` in Vercel's environment variables settings
- **CORS**: The backend already has CORS enabled for all origins
- **API Routes**: All `/api/*` routes will be handled by the backend
- **Static Files**: All other routes will serve the React frontend

## Troubleshooting

If you get "Missing script: build" error:
- Make sure you're deploying from the root directory
- Verify `vercel.json` is in the root
- Check that the build command in Vercel settings matches the one in `package.json`

If API calls fail:
- Check that environment variables are set in Vercel
- Verify the API routes are correctly configured
- Check Vercel function logs for errors
