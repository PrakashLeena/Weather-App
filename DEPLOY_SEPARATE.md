# Deploy Frontend and Backend Separately (RECOMMENDED)

The monorepo deployment is causing issues. Deploy them separately instead:

## Option 1: Deploy Backend First

### Step 1: Deploy Backend to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your `Weather-App` repository
4. **IMPORTANT Settings**:
   - **Project Name**: `weather-app-backend` (or any name)
   - **Framework Preset**: Other
   - **Root Directory**: `backend` ⚠️ (SELECT BACKEND FOLDER)
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`
5. Add Environment Variables:
   - `WEATHER_API_KEY` = `b189577290c7f0ebc62672681fac84b0`
6. Click "Deploy"
7. **Copy the deployment URL** (e.g., `https://weather-app-backend.vercel.app`)

### Step 2: Deploy Frontend

1. In Vercel, click "Add New" → "Project" again
2. Import the SAME `Weather-App` repository
3. **IMPORTANT Settings**:
   - **Project Name**: `weather-app-frontend` (or any name)
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend` ⚠️ (SELECT FRONTEND FOLDER)
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`
4. Add Environment Variable:
   - `REACT_APP_API_URL` = Your backend URL from Step 1 (e.g., `https://weather-app-backend.vercel.app`)
5. Click "Deploy"

### Step 3: Done! 🎉

Your app will be live at the frontend URL!

## Why This Works Better

- ✅ No monorepo complexity
- ✅ Each part builds independently
- ✅ Clear separation of concerns
- ✅ Easier to debug
- ✅ No path confusion

## Testing

Once deployed:
- Backend API: `https://your-backend.vercel.app/api/weather?city=London`
- Frontend: `https://your-frontend.vercel.app`

The frontend will automatically call the backend using the `REACT_APP_API_URL` environment variable.
