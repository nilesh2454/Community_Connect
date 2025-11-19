# Quick Start Guide

## 🚀 Get Everything Running

### Step 1: Start the Backend

1. Open a terminal in the **project root** (not inside backend folder)

2. Activate virtual environment:
   ```bash
   .\venv\Scripts\activate
   ```
   (Windows) or `source venv/bin/activate` (Linux/Mac)

3. Start the backend server (from project root):
   ```bash
   uvicorn backend.main:app --reload
   ```
   ✅ Backend will run at `http://127.0.0.1:8000`
   
   **Important:** Run this command from the project root, not from inside the backend folder!

### Step 2: Start the Frontend

1. Open a **NEW** terminal in the project root
2. Navigate to frontend:
   ```bash
   cd frontend
   ```
3. Install dependencies (first time only):
   ```bash
   npm install
   ```
4. Start the frontend:
   ```bash
   npm run dev
   ```
   ✅ Frontend will run at `http://localhost:5173`

### Step 3: Access the Application

Open your browser and go to: **http://localhost:5173**

## 🎯 Test Credentials

The database is automatically seeded with these users:

**Provider Account:**
- Email: `provider@example.com`
- Password: `providerpass`

**Customer Account:**
- Email: `customer@example.com`
- Password: `customerpass`

## 📝 What You Can Do

1. **Register/Login** - Create an account or login with test credentials
2. **View Services** - Browse available services
3. **Create Services** - If you're a provider, add new services
4. **Make Bookings** - Book services from providers
5. **Write Reviews** - Share your experience with services

## 🛠️ Troubleshooting

### Backend Issues
- Make sure PostgreSQL is running
- Check your `.env` file has correct `DATABASE_URL`
- Verify virtual environment is activated

### Frontend Issues
- Make sure backend is running first
- Check that `npm install` completed successfully
- Clear browser cache if needed

### CORS Errors
- Backend is configured to allow `localhost:5173` and `localhost:3000`
- Make sure frontend is running on one of these ports

## 📚 API Documentation

Once backend is running, visit:
- **Swagger UI**: http://127.0.0.1:8000/docs
- **ReDoc**: http://127.0.0.1:8000/redoc

