# Community Connect

A full-stack community service platform connecting users with local service providers.

## Tech Stack

### Backend
- **FastAPI** - Modern Python web framework
- **PostgreSQL** - Database
- **SQLAlchemy** - ORM
- **JWT** - Authentication

### Frontend
- **React.js** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Axios** - HTTP client

## Setup Instructions

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   ```

3. **Activate virtual environment**
   - Windows: `.\venv\Scripts\activate`
   - Linux/Mac: `source venv/bin/activate`

4. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

5. **Configure environment**
   Create a `.env` file in the `backend` directory:
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/community_connect
   SECRET_KEY=your-secret-key-here
   ALGORITHM=HS256
   ```

6. **Run the server**
   ```bash
   uvicorn backend.main:app --reload
   ```
   Server will run at `http://127.0.0.1:8000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   App will run at `http://localhost:5173`

## Features

- 🔐 User Authentication (Register/Login)
- 🔧 Service Management (Create/View Services)
- 📅 Booking System (Create/Manage Bookings)
- ⭐ Review System (Write/View Reviews)
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive Design

## API Endpoints

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user
- `GET /auth/users` - Get all users
- `GET /auth/users/{id}` - Get user by ID

### Services
- `GET /services/` - List all services
- `POST /services/` - Create new service

### Bookings
- `GET /bookings/` - List all bookings
- `POST /bookings/` - Create new booking

### Reviews
- `GET /reviews/` - List all reviews
- `POST /reviews/` - Create new review

## Default Users (Seeded)

- **Provider**: `provider@example.com` / `providerpass`
- **Customer**: `customer@example.com` / `customerpass`

## Development

The backend automatically seeds the database with sample data on startup. The frontend is configured to connect to the backend API at `http://127.0.0.1:8000`.

## License

MIT

