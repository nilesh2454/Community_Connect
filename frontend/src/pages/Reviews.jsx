import React, { useState, useEffect } from 'react';
import { reviewsAPI, servicesAPI, authAPI } from '../services/api';

const demoUsers = [
  { id: 9101, username: 'Aarav Sharma', email: 'aarav@demo-provider.com', is_provider: true },
  { id: 9102, username: 'Priya Kulkarni', email: 'priya@demo-provider.com', is_provider: true },
  { id: 9103, username: 'Dev Mehta', email: 'dev@demo-provider.com', is_provider: true },
  { id: 9104, username: 'Sara Fernandes', email: 'sara@demo-provider.com', is_provider: true },
  { id: 9105, username: 'Rahul Iyer', email: 'rahul@demo-provider.com', is_provider: true },
  { id: 9201, username: 'Meera Patel', email: 'meera@demo-user.com', is_provider: false },
  { id: 9202, username: 'Karan Bhide', email: 'karan@demo-user.com', is_provider: false },
  { id: 9203, username: 'Zoya Ahmed', email: 'zoya@demo-user.com', is_provider: false },
  { id: 9204, username: 'Siddharth Rao', email: 'sid@demo-user.com', is_provider: false },
];

const demoServices = [
  {
    id: 8101,
    name: 'SparkClean Home Detailing',
    category: 'Home Services',
    description: 'Deep cleaning for apartments and villas using eco-friendly products.',
    price: 89,
    provider_id: 9101,
  },
  {
    id: 8102,
    name: 'RapidFix Plumbing Rescue',
    category: 'Repairs',
    description: 'Emergency plumbing, leak fixes, and bathroom upgrades within 24 hours.',
    price: 120,
    provider_id: 9102,
  },
  {
    id: 8103,
    name: 'Tech Tutor @ Home',
    category: 'Education',
    description: '1-on-1 coding mentorship for Python, JavaScript, and Data Structures.',
    price: 45,
    provider_id: 9103,
  },
  {
    id: 8104,
    name: 'Urban Garden Care',
    category: 'Lifestyle',
    description: 'Balcony garden setup, maintenance, and seasonal plant care.',
    price: 65,
    provider_id: 9104,
  },
  {
    id: 8105,
    name: 'FitFlow Personal Training',
    category: 'Health & Wellness',
    description: 'Custom workout sessions with nutrition guidance (online/offline).',
    price: 55,
    provider_id: 9105,
  },
  {
    id: 8106,
    name: 'EventSnap Photography',
    category: 'Events',
    description: 'Professional photography for birthdays, engagements, and corporate meets.',
    price: 150,
    provider_id: 9103,
  },
  {
    id: 8107,
    name: 'Pawfect Grooming',
    category: 'Pet Care',
    description: 'Mobile pet spa, grooming, and basic vet checks for dogs & cats.',
    price: 70,
    provider_id: 9102,
  },
];

const demoReviews = [
  {
    id: 9601,
    service_id: 8101,
    user_id: 9201,
    rating: 5,
    comment: 'SparkClean made our apartment spotless! Loved the attention to detail.',
  },
  {
    id: 9602,
    service_id: 8102,
    user_id: 9202,
    rating: 4,
    comment: 'RapidFix fixed a major leak within hours. Slightly pricey but worth it.',
  },
  {
    id: 9603,
    service_id: 8103,
    user_id: 9203,
    rating: 5,
    comment: 'Dev explained complex DSA concepts with real-life examples. Highly recommend!',
  },
  {
    id: 9604,
    service_id: 8104,
    user_id: 9204,
    rating: 5,
    comment: 'Urban Garden Care revived my balcony garden – looks gorgeous now.',
  },
  {
    id: 9605,
    service_id: 8105,
    user_id: 9201,
    rating: 4,
    comment: 'FitFlow sessions are energizing. Would love even more nutrition tips!',
  },
  {
    id: 9606,
    service_id: 8106,
    user_id: 9202,
    rating: 5,
    comment: 'EventSnap captured every candid moment of our family celebration.',
  },
  {
    id: 9607,
    service_id: 8107,
    user_id: 9203,
    rating: 5,
    comment: 'My golden retriever loved the Pawfect grooming experience. Super gentle team.',
  },
];

const Reviews = ({ user }) => {
  const [reviews, setReviews] = useState([]);
  const [services, setServices] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usingDemoData, setUsingDemoData] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    service_id: '',
    user_id: user?.id || '',
    rating: 5,
    comment: '',
  });

  useEffect(() => {
    loadReviews();
    loadServices();
    loadUsers();
  }, []);

  const applyDemoData = () => {
    setReviews(demoReviews);
    setServices(demoServices);
    setUsers(demoUsers);
    setUsingDemoData(true);
  };

  const loadReviews = async () => {
    try {
      const data = await reviewsAPI.getReviews();
      if (data && data.length > 0) {
        setReviews(data);
      } else {
        applyDemoData();
      }
    } catch (error) {
      console.error('Failed to load reviews:', error);
      applyDemoData();
    } finally {
      setLoading(false);
    }
  };

  const loadServices = async () => {
    try {
      const data = await servicesAPI.getServices();
      if (data && data.length > 0) {
        setServices(data);
      } else {
        setServices(demoServices);
        setUsingDemoData(true);
      }
    } catch (error) {
      console.error('Failed to load services:', error);
      setServices(demoServices);
      setUsingDemoData(true);
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
      const reviewData = {
        ...formData,
        service_id: parseInt(formData.service_id),
        user_id: parseInt(formData.user_id),
        rating: parseInt(formData.rating),
      };
      await reviewsAPI.createReview(reviewData);
      setShowModal(false);
      setFormData({
        service_id: '',
        user_id: user?.id || '',
        rating: 5,
        comment: '',
      });
      loadReviews();
    } catch (error) {
      alert(error.response?.data?.detail || 'Failed to create review');
    }
  };

  const getServiceName = (serviceId) => {
    const service =
      services.find((s) => s.id === serviceId) ||
      demoServices.find((s) => s.id === serviceId);
    return service ? service.name : 'Unknown Service';
  };

  const getUserName = (userId) => {
    const reviewer =
      users.find((u) => u.id === userId) ||
      demoUsers.find((u) => u.id === userId);
    return reviewer ? reviewer.username : 'Community Member';
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
      >
        ★
      </span>
    ));
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
        <h1 className="text-4xl font-bold text-gray-900">Reviews</h1>
        {user && (
          <button
            onClick={() => setShowModal(true)}
            className="btn-primary"
          >
            + Write Review
          </button>
        )}
      </div>

      {usingDemoData && (
        <div className="mb-6 rounded-xl border border-primary-200 bg-primary-50 px-6 py-4 text-primary-800">
          <p className="font-semibold">Demo Preview Mode</p>
          <p className="text-sm">
            These testimonials are sample reviews shown when the backend API is offline. Connect to the live backend to view real community reviews.
          </p>
        </div>
      )}

      {!user && (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg mb-6">
          Please <a href="/login" className="underline font-semibold">login</a> to write a review.
        </div>
      )}

      {reviews.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No reviews yet.</p>
          {user && (
            <button
              onClick={() => setShowModal(true)}
              className="btn-primary mt-4"
            >
              Be the first to write a review
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {getServiceName(review.service_id)}
                  </h3>
                  <p className="text-sm text-gray-600">
                    by {getUserName(review.user_id)}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex">{renderStars(review.rating)}</div>
                  <span className="text-sm font-medium text-gray-700">
                    {review.rating}/5
                  </span>
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      )}

      {/* Create Review Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <h2 className="text-2xl font-bold mb-4">Write a Review</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  User
                </label>
                <select
                  name="user_id"
                  required
                  className="input-field"
                  value={formData.user_id}
                  onChange={handleChange}
                >
                  <option value="">Select a user</option>
                  {users.map((u) => (
                    <option key={u.id} value={u.id}>
                      {u.username} ({u.email})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service
                </label>
                <select
                  name="service_id"
                  required
                  className="input-field"
                  value={formData.service_id}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rating
                </label>
                <select
                  name="rating"
                  required
                  className="input-field"
                  value={formData.rating}
                  onChange={handleChange}
                >
                  <option value="5">5 - Excellent</option>
                  <option value="4">4 - Very Good</option>
                  <option value="3">3 - Good</option>
                  <option value="2">2 - Fair</option>
                  <option value="1">1 - Poor</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Comment
                </label>
                <textarea
                  name="comment"
                  required
                  rows="4"
                  className="input-field"
                  placeholder="Share your experience..."
                  value={formData.comment}
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
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;

