import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProviderDashboard = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // In a real app, we'd filter services by provider ID. 
        // For now, fetching all services and we'd filter client-side or add a backend endpoint.
        // Assuming backend has /services/my-services or similar, but for now using generic list
        // and assuming the user can only see their own if we implemented that logic.
        // Let's stick to a simple view for now.
        const fetchServices = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/services/');
                setServices(response.data); // This lists ALL services, ideally filter by current user
            } catch (error) {
                console.error("Error fetching services", error);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Provider Dashboard</h1>
                <div className="space-x-4">
                    <Link to="/profile" className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
                        Edit Profile
                    </Link>
                    <Link to="/create-service" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Create New Service
                    </Link>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">My Services</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service) => (
                            <div key={service.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
                                <h3 className="text-lg font-bold">{service.title}</h3>
                                <p className="text-gray-600 text-sm mb-2">{service.category}</p>
                                <p className="text-gray-800 font-semibold">${service.price}</p>
                                <div className="mt-4 flex justify-end">
                                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Edit</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProviderDashboard;
