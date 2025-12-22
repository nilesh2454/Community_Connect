import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Services from './pages/Services';
import Bookings from './pages/Bookings';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Contact from './pages/Contact';
import { authAPI } from './services/api';

import UserDashboard from './pages/UserDashboard';
import ProviderDashboard from './pages/ProviderDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Profile from './pages/Profile';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Ideally verify token with backend /me endpoint
      // For now, just assuming logged in if token exists
      // You might want to fetch user details here
      setUser({ token });
    }
    setLoading(false);
  }, []);

  const handleLogin = (data) => {
    localStorage.setItem('token', data.access_token);
    localStorage.setItem('role', data.role);
    setUser(data);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setUser(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  const role = localStorage.getItem('role');

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar user={user} onLogout={handleLogout} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register onLogin={handleLogin} />} />
            <Route path="/services" element={<Services user={user} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route
              path="/dashboard"
              element={
                !user ? <Navigate to="/login" replace /> :
                  role === 'admin' ? <Navigate to="/admin" replace /> :
                    role === 'provider' ? <Navigate to="/provider" replace /> :
                      <UserDashboard />
              }
            />

            <Route
              path="/admin"
              element={user && role === 'admin' ? <AdminDashboard /> : <Navigate to="/login" replace />}
            />

            <Route
              path="/provider"
              element={user && role === 'provider' ? <ProviderDashboard /> : <Navigate to="/login" replace />}
            />

            <Route
              path="/profile"
              element={user ? <Profile /> : <Navigate to="/login" replace />}
            />

            <Route
              path="/bookings"
              element={user ? <Bookings user={user} /> : <Navigate to="/login" replace />}
            />
            <Route
              path="/reviews"
              element={user ? <Reviews user={user} /> : <Navigate to="/login" replace />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

