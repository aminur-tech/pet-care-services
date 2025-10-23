import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                {/* Contact Info */}
                <div className="text-center sm:text-left">
                    <h3 className="font-bold text-xl mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
                    <p className="text-sm mb-1">Email: <span className="text-gray-300">info@petcare.com</span></p>
                    <p className="text-sm mb-1">Phone: <span className="text-gray-300">01327694078</span></p>
                    <p className="text-sm">Address: <span className="text-gray-300">Uksha-9440, Kaligonj, Satkhira, Bangladesh</span></p>
                </div>

                {/* Social Links */}
                <div className="text-center">
                    <h3 className="font-bold text-xl mb-4 border-b border-gray-700 pb-2">Follow Us</h3>
                    <div className="flex justify-center sm:justify-center md:justify-center space-x-4 mt-3">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                           className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                           className="p-2 rounded-full bg-blue-400 hover:bg-blue-500 transition-colors duration-300">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                           className="p-2 rounded-full bg-pink-500 hover:bg-pink-600 transition-colors duration-300">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                           className="p-2 rounded-full bg-blue-700 hover:bg-blue-800 transition-colors duration-300">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>

                {/* Policies */}
                <div className="text-center sm:text-left md:text-left">
                    <h3 className="font-bold text-xl mb-4 border-b border-gray-700 pb-2">Policy</h3>
                    <ul className="space-y-2 mt-3">
                        <li>
                            <a href="/privacy" className="hover:text-gray-400 transition-colors duration-300">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/terms" className="hover:text-gray-400 transition-colors duration-300">Terms of Service</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-gray-400 transition-colors duration-300">Contact Form</a>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Copyright */}
            <div className="text-center py-4 border-t border-gray-700 text-sm text-gray-400 bg-gray-800">
                &copy; {new Date().getFullYear()} Pet Care. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
