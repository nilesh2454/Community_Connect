import React, { useState, useEffect } from 'react';
import { servicesAPI, authAPI } from '../services/api';

const demoUsers = [
  { id: 9101, username: 'Aarav Sharma', email: 'aarav@demo-provider.com', is_provider: true },
  { id: 9102, username: 'Priya Kulkarni', email: 'priya@demo-provider.com', is_provider: true },
  { id: 9103, username: 'Dev Mehta', email: 'dev@demo-provider.com', is_provider: true },
  { id: 9104, username: 'Sara Fernandes', email: 'sara@demo-provider.com', is_provider: true },
  { id: 9105, username: 'Rahul Iyer', email: 'rahul@demo-provider.com', is_provider: true },
];

const demoServices = [
  {
    id: 8101,
    name: 'SparkClean Home Detailing',
    category: 'Home Services',
    description: 'Deep cleaning for apartments and villas using eco-friendly products.',
    price: 89,
    provider_id: demoUsers[0].id,
  },
  {
    id: 8102,
    name: 'RapidFix Plumbing Rescue',
    category: 'Repairs',
    description: 'Emergency plumbing, leak fixes, and bathroom upgrades within 24 hours.',
    price: 120,
    provider_id: demoUsers[1].id,
  },
  {
    id: 8103,
    name: 'Tech Tutor @ Home',
    category: 'Education',
    description: '1-on-1 coding mentorship for Python, JavaScript, and Data Structures.',
    price: 45,
    provider_id: demoUsers[2].id,
  },
  {
    id: 8104,
    name: 'Urban Garden Care',
    category: 'Lifestyle',
    description: 'Balcony garden setup, maintenance, and seasonal plant care.',
    price: 65,
    provider_id: demoUsers[3].id,
  },
  {
    id: 8105,
    name: 'FitFlow Personal Training',
    category: 'Health & Wellness',
    description: 'Custom workout sessions with nutrition guidance (online/offline).',
    price: 55,
    provider_id: demoUsers[4].id,
  },
  {
    id: 8106,
    name: 'EventSnap Photography',
    category: 'Events',
    description: 'Professional photography for birthdays, engagements, and corporate meets.',
    price: 150,
    provider_id: demoUsers[2].id,
  },
  {
    id: 8107,
    name: 'Pawfect Grooming',
    category: 'Pet Care',
    description: 'Mobile pet spa, grooming, and basic vet checks for dogs & cats.',
    price: 70,
    provider_id: demoUsers[1].id,
  },
];

const Services = ({ user }) => {
  const [services, setServices] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usingDemoData, setUsingDemoData] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    provider_id: user?.id || '',
  });

  useEffect(() => {
    loadServices();
    loadUsers();
  }, []);

  const applyDemoData = () => {
    setServices(demoServices);
    setUsers(demoUsers);
    setUsingDemoData(true);
  };

  const loadServices = async () => {
    try {
      const data = await servicesAPI.getServices();
      if (data && data.length > 0) {
        setServices(data);
      } else {
        applyDemoData();
      }
    } catch (error) {
      console.error('Failed to load services:', error);
      applyDemoData();
    } finally {
      setLoading(false);
    }
  };

  const loadUsers = async () => {
    try {
      const data = await authAPI.getUsers();
      if (data && data.length > 0) {
        setUsers(data);
      } else {
        setUsers(demoUsers);
        setUsingDemoData(true);
      }
    } catch (error) {
      console.error('Failed to load users:', error);
      setUsers(demoUsers);
      setUsingDemoData(true);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const serviceData = {
        ...formData,
        price: parseFloat(formData.price),
        provider_id: parseInt(formData.provider_id),
      };
      await servicesAPI.createService(serviceData);
      setShowModal(false);
      setFormData({
        name: '',
        category: '',
        description: '',
        price: '',
        provider_id: user?.id || '',
      });
      loadServices();
    } catch (error) {
      alert(error.response?.data?.detail || 'Failed to create service');
    }
  };

  const getProviderName = (providerId) => {
    const provider =
      users.find((u) => u.id === providerId) ||
      demoUsers.find((u) => u.id === providerId);
    return provider ? provider.username : 'Community Provider';
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Available Services</h1>
        {user?.is_provider && (
          <button
            onClick={() => setShowModal(true)}
            className="btn-primary"
          >
            + Add Service
          </button>
        )}
      </div>

      {usingDemoData && (
        <div className="mb-8 rounded-xl border border-primary-200 bg-primary-50 px-6 py-4 text-primary-800">
          <p className="font-semibold">Demo Preview Mode</p>
          <p className="text-sm">
            These listings are sample services to showcase the UI when the backend API is unavailable.
            Sign in to the live backend to view real services.
          </p>
        </div>
      )}

      {services.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No services available yet.</p>
          {user?.is_provider && (
            <button
              onClick={() => setShowModal(true)}
              className="btn-primary mt-4"
            >
              Be the first to add a service
            </button>
          )}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="card">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {service.category}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary-600">
                  ${service.price}
                </span>
                <span className="text-sm text-gray-500">
                  by {getProviderName(service.provider_id)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create Service Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <h2 className="text-2xl font-bold mb-4">Create New Service</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="input-field"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  required
                  className="input-field"
                  value={formData.category}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  required
                  rows="3"
                  className="input-field"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price ($)
                </label>
                <input
                  type="number"
                  name="price"
                  required
                  step="0.01"
                  className="input-field"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="btn-secondary flex-1"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary flex-1">
                  Create Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;

