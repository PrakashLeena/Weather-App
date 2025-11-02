# Quick Vercel Deployment Guide

## ✅ Files Ready for Deployment

Your project now has:
- ✅ `vercel.json` - Vercel configuration
- ✅ `package.json` with build script
- ✅ Updated frontend to support production API URLs
- ✅ Environment variable support

## 🚀 Deploy to Vercel (Easiest Method)

### Step 1: Push Your Changes to GitHub
```bash
git add .
git commit -m "Add Vercel deployment configuration"
git push origin main
```

### Step 2: Deploy on Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New" → "Project"
4. Select your `Weather-App` repository
5. Configure the project:
   - **Framework Preset**: Other
   - **Root Directory**: `.` (leave as root)
   - Leave Build Command, Output Directory, and Install Command EMPTY
   - Vercel will use the settings from `vercel.json`

### Step 3: Add Environment Variables

In Vercel project settings → Environment Variables, add:

| Name | Value |
|------|-------|
| `WEATHER_API_KEY` | `b189577290c7f0ebc62672681fac84b0` |

### Step 4: Deploy!

Click "Deploy" and wait for the build to complete.

## 🔧 After Deployment

Your app will be live at: `https://your-project-name.vercel.app`

- Frontend: Served from root URL
- Backend API: Available at `/api/weather`

## 🐛 If You Get Errors

### "Missing script: build"
- Make sure you're deploying from the root directory (not frontend or backend)
- Verify the build command is: `npm run build`

### API Not Working
1. Check Environment Variables are set in Vercel dashboard
2. Check Function Logs in Vercel dashboard
3. Make sure CORS is enabled (already done in backend/server.js)

### Build Fails
- Check the build logs in Vercel
- Make sure all dependencies are in package.json
- Try building locally first: `npm run build`

## 📝 Notes

- The current setup deploys both frontend and backend together
- Backend runs as Vercel Serverless Functions
- Frontend is served as static files
- All `/api/*` routes go to the backend
- All other routes serve the React app
