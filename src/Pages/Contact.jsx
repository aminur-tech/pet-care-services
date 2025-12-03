import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
    // State for form inputs (optional, but good practice for handling submissions)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would handle form submission here (e.g., Axios post request)
        console.log('Form Submitted:', formData);
        alert('Thank you for your message! We will get back to you shortly.');
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="w-11/12 max-w-6xl mx-auto">
                
                {/* HEADER */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        💌 Get In Touch
                    </h1>
                    <p className="mt-3 text-xl text-gray-500 max-w-2xl mx-auto">
                        We'd love to hear from you. Send us a message or find our office location below.
                    </p>
                </div>
                
                {/* --- */}

                {/* CONTACT GRID: FORM (LEFT) & INFO/MAP (RIGHT) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
                    
                    {/* 1. CONTACT FORM */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                                    placeholder="Jane Doe"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                                    placeholder="you@example.com"
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            
                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <FiSend className="mr-2 text-lg" />
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* 2. COMPANY INFO AND MAP */}
                    <div className="order-1 lg:order-2 bg-indigo-50 p-6 md:p-8 rounded-xl flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
                            
                            {/* Details List */}
                            <ul className="space-y-6 text-gray-600">
                                <li className="flex items-start">
                                    <FiMapPin className="flex-shrink-0 text-indigo-500 text-2xl mt-1 mr-3" />
                                    <div>
                                        <p className="font-semibold text-gray-800">Our Location</p>
                                        <p>Kaligonj, Satkhira</p>
                                        <p>Bangladesh</p>
                                    </div>
                                </li>
                                <li className="flex items-center">
                                    <FiPhone className="flex-shrink-0 text-indigo-500 text-2xl mr-3" />
                                    <div>
                                        <p className="font-semibold text-gray-800">Phone</p>
                                        <p>+8801327694078</p>
                                    </div>
                                </li>
                                <li className="flex items-center">
                                    <FiMail className="flex-shrink-0 text-indigo-500 text-2xl mr-3" />
                                    <div>
                                        <p className="font-semibold text-gray-800">Email</p>
                                        <p>aminurrahman9793@gmail.com</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Embedded Map Placeholder */}
                        <div className="mt-8 h-48 bg-gray-200 rounded-lg overflow-hidden shadow-inner">
                             {/* You would replace this placeholder with an actual embedded Google Map iframe */}
                            <div className="flex items-center justify-center h-full text-gray-500 text-center text-sm">
                                
                                <p>Map Location Placeholder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;