# Community Connect

A full-stack community service platform connecting users with local service providers.

## Project Structure

```🌐 Community Connect – Local Service Finder Platform

A full-stack platform that connects users with nearby verified service providers—including electricians, carpenters, tutors, mechanics, farmers’ helpers, and more.
Built for speed, scalability, and a smooth user experience using FastAPI, React, and PostgreSQL.

📁 Project Structure
community_connect/
├── venv/                 # Python virtual environment
├── backend/              # FastAPI backend application
│   ├── core/             # Core configurations & utilities
│   ├── models/           # Database models
│   ├── routers/          # API route handlers
│   ├── schemas/          # Pydantic schemas
│   └── requirements.txt
└── frontend/             # React.js frontend application
    ├── src/              # React components, hooks, pages
    ├── public/           # Static assets
    └── package.json

🚀 Quick Start Guide
🔧 Backend Setup (FastAPI)
1️⃣ Activate Virtual Environment

Windows:

.\venv\Scripts\activate


Linux/Mac:

source venv/bin/activate

2️⃣ Install Backend Dependencies
cd backend
pip install -r requirements.txt
cd ..

3️⃣ Create Environment Config

Create a .env inside the backend folder:

DATABASE_URL=postgresql://user:password@localhost:5432/community_connect
SECRET_KEY=your-secret-key
ALGORITHM=HS256

4️⃣ Run the Backend Server
uvicorn backend.main:app --reload


Backend runs at:
👉 http://127.0.0.1:8000

🎨 Frontend Setup (React + Vite)
1️⃣ Move into frontend directory:
cd frontend

2️⃣ Install dependencies:
npm install

3️⃣ Start the development server:
npm run dev


Frontend runs at:
👉 http://localhost:5173

🛠️ Tech Stack
Backend

⚡ FastAPI (High-performance Python framework)

🗄️ PostgreSQL (with PostGIS support if needed)

🧩 SQLAlchemy ORM

🔐 JWT Authentication

🚀 Uvicorn ASGI Server

Frontend

⚛️ React.js

⚡ Vite (Fast bundler)

🎨 Tailwind CSS

🧭 React Router DOM

🔗 Axios for API calls

⭐ Key Features
👤 Authentication

Register & Login with JWT

Password hashing

Role-based handling (Customer / Provider)

🔧 Service Management

Providers can create, update, and manage services

Users can view services based on categories or local area

📅 Booking System

Users can book service providers

Providers can manage booking requests

⭐ Review & Ratings

Customers can rate and review completed services

📱 Responsive Frontend

Tailwind-powered modern UI

Mobile-first design

👥 Default Seed Users
Role	Email	Password
Provider	provider@example.com
	providerpass
Customer	customer@example.com
	customerpass
📘 API Documentation

Once the backend is running:

Swagger UI → http://127.0.0.1:8000/docs

ReDoc → http://127.0.0.1:8000/redoc

🔧 Build & Production Instructions
📦 Backend Production Start
uvicorn backend.main:app --host 0.0.0.0 --port 8000

🏗️ Frontend Production Build
npm run build
npm run preview

🤝 Contribution Guidelines

Contributions are welcome!

Fork the repository

Create a new feature branch

Commit changes

Submit a pull request

📄 License

This project is licensed under the MIT License.

👨‍💻 Developer

Designed & developed by Nilesh D. Pawar
🔗 Portfolio: https://nilesh-pawar-portfolio.vercel.app/
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

