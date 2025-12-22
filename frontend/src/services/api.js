import axios from 'axios';
 
const API_BASE_URL = 'http://127.0.0.1:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth API
export const authAPI = {
  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },
  
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },
  
  getUsers: async () => {
    const response = await api.get('/auth/users');
    return response.data;
  },
  
  getUser: async (userId) => {
    const response = await api.get(`/auth/users/${userId}`);
    return response.data;
  },
};

// Services API
export const servicesAPI = {
  getServices: async () => {
    const response = await api.get('/services/');
    return response.data;
  },
  
  createService: async (serviceData) => {
    const response = await api.post('/services/', serviceData);
    return response.data;
  },
};

// Bookings API
export const bookingsAPI = {
  getBookings: async () => {
    const response = await api.get('/bookings/');
    return response.data;
  },
  
  createBooking: async (bookingData) => {
    const response = await api.post('/bookings/', bookingData);
    return response.data;
  },
  
  cancelBooking: async (bookingId) => {
    const response = await api.patch(`/bookings/${bookingId}/cancel`);
    return response.data;
  },
};

// Reviews API
export const reviewsAPI = {
  getReviews: async () => {
    const response = await api.get('/reviews/');
    return response.data;
  },
  
  createReview: async (reviewData) => {
    const response = await api.post('/reviews/', reviewData);
    return response.data;
  },
};

export default api;

