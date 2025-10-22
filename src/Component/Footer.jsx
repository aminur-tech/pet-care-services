import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white mt-8">
            <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Contact Info */}
                <div>
                    <h3 className="font-bold text-lg mb-2">Contact Us</h3>
                    <p>Email: info@petcare.com</p>
                    <p>Phone: 01327694078</p>
                    <p>Address: Uksha-9440, Kaligonj, Satkhira, Bangladesh</p>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="font-bold text-lg mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="w-6 h-6 text-blue-600 hover:text-blue-800" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="w-6 h-6 text-blue-400 hover:text-blue-600" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="w-6 h-6 text-pink-500 hover:text-pink-700" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="w-6 h-6 text-blue-700 hover:text-blue-900" />
                        </a>
                    </div>
                </div>

                {/* Policies */}
                <div>
                    <h3 className="font-bold text-lg mb-2">Policy</h3>
                    <ul className="space-y-1">
                        <li>
                            <a href="/privacy" className="link link-hover">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/terms" className="link link-hover">Terms of Service</a>
                        </li>
                        <li>
                            <a href="/contact" className="link link-hover">Contact Form</a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="text-center py-4 border-t border-base-300">
                &copy; {new Date().getFullYear()} Pet Care. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;