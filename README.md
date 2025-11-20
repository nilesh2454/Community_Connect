# Community Connect

A full-stack community service platform connecting users with local service providers.

## Project Structure

```
community_connect/
├── venv/             # Python virtual environment
├── backend/          # FastAPI backend application
│   ├── core/         # Core utilities and configurations
│   ├── models/       # Database models
│   ├── routers/      # API route handlers
│   ├── schemas/      # Pydantic schemas
│   └── requirements.txt
└── frontend/         # React.js frontend application
    ├── src/          # React source files
    ├── public/       # Static assets
    └── package.json
```

## Quick Start

### Backend Setup

1. **Activate virtual environment** (from project root):
   ```bash
   .\venv\Scripts\activate
   ```
   (Windows) or `source venv/bin/activate` (Linux/Mac)

2. **Install dependencies** (if not already installed):
   ```bash
   cd backend
   pip install -r requirements.txt
   cd ..
   ```

3. **Configure environment**
   Create a `.env` file in the `backend` directory:
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/community_connect
   SECRET_KEY=your-secret-key-here
   ALGORITHM=HS256
   ```

4. **Run the server** (from project root):
   ```bash
   uvicorn backend.main:app --reload
   ```
   Server will run at `http://127.0.0.1:8000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies** (first time only)
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   App will run at `http://localhost:5173`

## Demo Credentials (Frontend Preview)

When the backend API isn't available (for example, if only the frontend is deployed), use these demo accounts to explore the UI:

- **Provider Demo**  
  Email: `demo.provider@communityconnect.com`  
  Password: `Provider@123`

- **Customer Demo**  
  Email: `demo.customer@communityconnect.com`  
  Password: `Customer@123`

> The Services and Reviews pages automatically fall back to curated sample data whenever the backend cannot be reached, ensuring the UI stays informative during demos.


## Tech Stack

### Backend
- FastAPI - Modern Python web framework
- PostgreSQL - Database
- SQLAlchemy - ORM
- JWT - Authentication

### Frontend
- React.js - UI library
- Vite - Build tool
- Tailwind CSS - Styling
- React Router - Navigation
- Axios - HTTP client

## Features

- 🔐 User Authentication (Register/Login)
- 🔧 Service Management (Create/View Services)
- 📅 Booking System (Create/Manage Bookings)
- ⭐ Review System (Write/View Reviews)
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive Design

## Default Users (Seeded)

- **Provider**: `provider@example.com` / `providerpass`
- **Customer**: `customer@example.com` / `customerpass`

## API Documentation

Once backend is running, visit:
- **Swagger UI**: http://127.0.0.1:8000/docs
- **ReDoc**: http://127.0.0.1:8000/redoc

## License

MIT

## Developer

Design and developed by [Nilesh D Pawar](https://nilesh-pawar-portfolio.vercel.app/)
