import React, { useContext } from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { AuthContext } from '../Providers/AuthContext';
import { Link } from 'react-router';

const My_Profile = () => {
    const {user} = useContext(AuthContext)
    // console.log(user)
    return (
        <div>
            <div>
                <header>
                    <Navbar></Navbar>
                </header>
            </div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
                    <img
                        src={user.photoURL}
                        alt=''
                        className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-indigo-500"
                    />
                    <h2 className="mt-6 text-2xl font-semibold text-gray-800">{user.displayName}</h2>
                    <p className="mt-2 text-gray-600">{user.email}</p> <br />

                    <Link to='/profile/update'
                        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-sky-500 transition"
                    >
                        Update Profile
                    </Link>
                </div>
            </div>

            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default My_Profile;