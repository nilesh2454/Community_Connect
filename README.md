🌐 𝗖𝗢𝗠𝗠𝗨𝗡𝗜𝗧𝗬 𝗖𝗢𝗡𝗡𝗘𝗖𝗧 – 𝗟𝗢𝗖𝗔𝗟 𝗦𝗘𝗥𝗩𝗜𝗖𝗘 𝗙𝗜𝗡𝗗𝗘𝗥 𝗣𝗟𝗔𝗧𝗙𝗢𝗥𝗠

A full-stack platform that connects users with nearby verified service providers—including electricians, carpenters, tutors, mechanics, farmers’ helpers, and more.
Built for speed, scalability, and smooth user experience using FastAPI, React, and PostgreSQL.

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

Create a .env file inside the backend folder:

DATABASE_URL=postgresql://user:password@localhost:5432/community_connect
SECRET_KEY=your-secret-key
ALGORITHM=HS256

4️⃣ Run the Backend Server
uvicorn backend.main:app --reload


Backend runs at:
👉 http://127.0.0.1:8000

🎨 Frontend Setup (React + Vite)
1️⃣ Navigate to frontend directory
cd frontend

2️⃣ Install dependencies
npm install

3️⃣ Start development server
npm run dev


Frontend runs at:
👉 http://localhost:5173

🛠️ Tech Stack
Backend

⚡ FastAPI

🗄️ PostgreSQL

🧩 SQLAlchemy ORM

🔐 JWT Authentication

🚀 Uvicorn ASGI

Frontend

⚛️ React.js

⚡ Vite

🎨 Tailwind CSS

🧭 React Router DOM

🔗 Axios

⭐ Key Features
👤 Authentication

JWT-based Register & Login

Password hashing

Role: Customer / Provider

🔧 Service Management

Providers manage services

Users browse services

📅 Booking System

Book service providers

Providers handle booking requests

⭐ Reviews & Ratings

Customers rate providers

📱 Responsive UI

Tailwind UI

Mobile-first layout

👥 Default Seed Users
Role	Email	Password
Provider	provider@example.com
	providerpass
Customer	customer@example.com
	customerpass
📘 API Documentation

Once backend is running:

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

Commit your changes

Submit a pull request

📄 License

This project is licensed under the MIT License.

👨‍💻 Developer

Designed & developed by Nilesh D. Pawar
🔗 Portfolio: https://nilesh-pawar-portfolio.vercel.app/
