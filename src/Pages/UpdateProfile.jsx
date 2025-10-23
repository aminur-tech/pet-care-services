import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthContext';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';


const UpdateProfile = () => {
    const { loading, updateUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()


    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        console.log(name, photo)
        updateUser({ displayName: name, photoURL: photo })
            .then(() => {
                toast.success('Successfully Updated!');
                navigate('/profile');
            })
            .catch(error => {
                setError(error.message)
            })

        toast.success('Successfully Update!')
    }
    return (
        <div>
            <div>
                <header>
                    <Navbar></Navbar>
                </header>

                <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                    <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
                        <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
                        {error && <p className="text-red-500 mb-2">{error}</p>}
                        <form onSubmit={handleUpdate} className="space-y-4 text-left">
                            <div>
                                <label className="block text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name='name'
                                    className="w-full px-4 py-2 border rounded-lg"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Photo URL</label>
                                <input
                                    type="text"
                                    name='photo'
                                    className="w-full px-4 py-2 border rounded-lg"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"

                            >
                                {loading ? 'Updating...' : 'Update Profile'}
                            </button>
                        </form>
                    </div>
                </div>

                <footer>
                    <Footer></Footer>
                </footer>
            </div>

        </div>
    );
};

export default UpdateProfile;