import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Community Connect</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Building stronger communities by connecting neighbors with trusted local service providers
        </p>
      </div>

      {/* Story Section */}
      <div className="mb-16">
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center mb-4">
            Community Connect was born from a simple idea: neighbors helping neighbors. In today's fast-paced world, 
            finding reliable local services can be challenging, and small businesses struggle to reach their community. 
            We saw an opportunity to bridge this gap.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
            Founded with the vision of creating a trusted platform where community members can easily discover, 
            book, and review local services, Community Connect has grown into a vibrant network of neighbors 
            supporting each other and local businesses thriving together.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At Community Connect, we believe in the power of local connections. Our mission is to create 
            a platform where neighbors can easily find, book, and review local services while building 
            trust within their community.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            We're committed to making it easier for service providers to reach their local community 
            and for residents to discover quality services right in their neighborhood.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Foster local economic growth</li>
            <li>Build trust within communities</li>
            <li>Support small businesses</li>
            <li>Create meaningful neighbor connections</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We envision a world where every community member has easy access to trusted local services, 
            where small businesses can thrive, and where neighbors support each other through meaningful 
            connections.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            By fostering these connections, we're not just building a platform—we're strengthening 
            the fabric of local communities.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Every community member connected</li>
            <li>Local businesses thriving</li>
            <li>Trusted service networks</li>
            <li>Sustainable community growth</li>
          </ul>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="font-semibold text-gray-900 mb-2">Trust</h3>
            <p className="text-gray-600 text-sm">
              Building trust through transparency and verified connections
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600 text-sm">
              Putting community first in everything we do
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="font-semibold text-gray-900 mb-2">Excellence</h3>
            <p className="text-gray-600 text-sm">
              Striving for excellence in service and user experience
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600 text-sm">
              Continuously improving to serve our community better
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Why Choose Community Connect?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Trusted Community</h3>
            <p className="text-gray-600">
              Connect with verified service providers in your local area. All providers are community members 
              who have been verified to ensure quality and reliability.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Booking</h3>
            <p className="text-gray-600">
              Simple and quick booking process for all your service needs. No complicated forms or lengthy 
              procedures—just find, book, and connect.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Real Reviews</h3>
            <p className="text-gray-600">
              Read authentic reviews from your neighbors before booking. Make informed decisions based on 
              real experiences from community members.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How Community Connect Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-600 rounded-full mb-6">
              <span className="text-3xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Sign Up</h3>
            <p className="text-gray-600">
              Create your free account in seconds. Choose to be a service provider or a customer, 
              or both! It's completely free to join.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-600 rounded-full mb-6">
              <span className="text-3xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Discover Services</h3>
            <p className="text-gray-600">
              Browse through a wide range of local services available in your community. 
              Filter by category, price, or location to find exactly what you need.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-600 rounded-full mb-6">
              <span className="text-3xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Book & Connect</h3>
            <p className="text-gray-600">
              Book services easily and connect with trusted providers in your neighborhood. 
              Manage all your bookings in one convenient place.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white text-center mb-16 shadow-xl">
        <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
        <div className="grid md:grid-cols-4 gap-8">
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
          <div>
            <div className="text-5xl font-bold mb-2">4.8★</div>
            <div className="text-primary-100 text-lg">Average Rating</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community Today</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Whether you're looking for services or offering them, Community Connect is here for you. 
          Join thousands of community members building stronger neighborhoods together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/register" className="btn-primary text-lg px-8 py-3">
            Get Started Free
          </Link>
          <Link to="/contact" className="btn-secondary text-lg px-8 py-3">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

