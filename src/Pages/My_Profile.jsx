import React, { useContext } from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { AuthContext } from '../Providers/AuthContext';
import { Link } from 'react-router';

const My_Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 min-h-screen">
            {/* Navbar */}
            <header>
                <Navbar />
            </header>

            {/* Profile Section */}
            <div className="min-h-[80vh] flex items-center justify-center px-4 py-10">
                <div className="relative bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-10 w-full max-w-md text-center">

                    {/* Decorative Circles */}
                    <div className="absolute -top-6 -left-6 w-20 h-20 bg-indigo-200 rounded-full blur-2xl opacity-40"></div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-200 rounded-full blur-2xl opacity-40"></div>

                    {/* Profile Image */}
                    <div className="relative group">
                        <img
                            src={user.photoURL}
                            alt=""
                            className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-indigo-500 shadow-xl transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>

                    {/* User Name */}
                    <h2 className="mt-6 text-3xl font-bold text-gray-800 tracking-tight">
                        {user.displayName}
                    </h2>

                    {/* User Email */}
                    <p className="mt-2 text-gray-600 text-sm">{user.email}</p>

                    {/* Divider */}
                    <div className="my-6 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>

                    {/* Update Button */}
                    <Link
                        to="/profile/update"
                        className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-7 py-2.5 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
                    >
                        Update Profile
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default My_Profile;
