import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ user }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Connect with Your Community
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Find trusted local services, book appointments, and share reviews with your neighbors.
          Building stronger communities, one connection at a time.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          {!user ? (
            <>
              <Link to="/register" className="btn-primary text-lg px-8 py-3 w-full sm:w-auto">
                Get Started Free
              </Link>
              <Link to="/services" className="btn-secondary text-lg px-8 py-3 w-full sm:w-auto">
                Browse Services
              </Link>
            </>
          ) : (
            <>
              <Link to="/services" className="btn-primary text-lg px-8 py-3 w-full sm:w-auto">
                Explore Services
              </Link>
              <Link to="/bookings" className="btn-secondary text-lg px-8 py-3 w-full sm:w-auto">
                My Bookings
              </Link>
            </>
          )}
        </div>
      </div>

      {/* How It Works Section */}
      {!user && (
        <div className="mt-20 mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p className="text-gray-600">
                Create your free account in seconds. Choose to be a service provider or a customer.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Discover Services</h3>
              <p className="text-gray-600">
                Browse through a wide range of local services available in your community.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Book & Connect</h3>
              <p className="text-gray-600">
                Book services easily and connect with trusted providers in your neighborhood.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mt-20">
        <div className="card text-center hover:transform hover:scale-105 transition-transform">
          <div className="text-5xl mb-4">🔧</div>
          <h3 className="text-xl font-semibold mb-2">Find Services</h3>
          <p className="text-gray-600">
            Discover local service providers in your community. From home repairs to professional services, 
            find exactly what you need.
          </p>
        </div>
        <div className="card text-center hover:transform hover:scale-105 transition-transform">
          <div className="text-5xl mb-4">📅</div>
          <h3 className="text-xl font-semibold mb-2">Book Appointments</h3>
          <p className="text-gray-600">
            Easily schedule and manage your bookings. Keep track of all your appointments in one convenient place.
          </p>
        </div>
        <div className="card text-center hover:transform hover:scale-105 transition-transform">
          <div className="text-5xl mb-4">⭐</div>
          <h3 className="text-xl font-semibold mb-2">Share Reviews</h3>
          <p className="text-gray-600">
            Help others by sharing your experiences. Read authentic reviews from community members 
            before making decisions.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      {!user && (
        <div className="mt-20 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Community Connect?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Trusted & Verified</h3>
                <p className="text-gray-600">
                  All service providers are verified members of your local community, ensuring quality and reliability.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick & Easy</h3>
                <p className="text-gray-600">
                  Simple booking process that takes just minutes. No complicated forms or lengthy procedures.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Community First</h3>
                <p className="text-gray-600">
                  Built for neighbors, by neighbors. Support local businesses and strengthen your community bonds.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fair Pricing</h3>
                <p className="text-gray-600">
                  Transparent pricing with no hidden fees. Compare services and choose what fits your budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white text-center shadow-xl">
        <h2 className="text-3xl font-bold mb-8">Join Our Growing Community</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-5xl font-bold mb-2">100+</div>
            <div className="text-primary-100 text-lg">Active Users</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">50+</div>
            <div className="text-primary-100 text-lg">Services Available</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">200+</div>
            <div className="text-primary-100 text-lg">Completed Bookings</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {!user && (
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of community members connecting with local services
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/register" className="btn-primary text-lg px-8 py-3 w-full sm:w-auto">
              Create Free Account
            </Link>
            <Link to="/about" className="btn-secondary text-lg px-8 py-3 w-full sm:w-auto">
              Learn More
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
