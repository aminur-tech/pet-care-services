import { Eye, EyeOff } from 'lucide-react';
import React, { useState, useContext } from 'react'; // ✅ useContext instead of use

import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Providers/AuthContext';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [nameError, setNameError] = useState('')
    const { setUser, createUser, updateUser } = useContext(AuthContext); // ✅ correct hook
    const Navigate = useNavigate()

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value; // ✅ fixed small typo: name="Photo" → "photo"
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password)

        if (name.length < 5) {
            setNameError('name should be 5 cheater')
            return
        }
        else {
            setNameError('')
        }


        createUser(email, password)
            .then(result => {
                const user = result.user
                updateUser({ displayName: name, photoURL: photo })
                    .then(() =>
                        setUser({ ...user, displayName: name, photoURL: photo }),
                        Navigate('/')

                    )
                    .catch((error) => {
                        console.log(error)
                        setUser(user)
                    })
            })
            .catch(error => console.log(error.message));
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSignUp}>
                        <h2 className="text-2xl font-bold text-center mb-4">
                            Register your account
                        </h2>

                        <fieldset className="fieldset space-y-2">
                            {/* Name */}
                            <label className="label">Your Name</label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="Your Name"
                                name="name"
                                required
                            />
                            {
                                nameError && <p className='text-secondary'>{nameError}</p>
                            }

                            {/* Photo URL */}
                            <label className="label">Photo URL</label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="Photo URL"
                                name="photo" 
                                required
                            />

                            {/* Email */}
                            <label className="label">Email</label>
                            <input
                                type="email"
                                className="input input-bordered w-full"
                                placeholder="Email"
                                name="email"
                                required
                            />

                            {/* Password */}
                            <div className="relative">
                                <label className="label">Password</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="input input-bordered w-full"
                                    placeholder="Password"
                                    name="password"
                                    required
                                />
                            
                                <button
                                    type="button"
                                    className="absolute right-3 top-7 text-gray-500"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>

                            {/* Terms & Conditions */}
                            <div className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
                                <label className="label cursor-pointer">
                                    <input type="checkbox" className="checkbox" name="terms" />
                                    <span className="ml-2">Accept Our Terms and Conditions</span>
                                </label>
                            </div>

                            
                            <button className="btn btn-neutral w-full mt-4" type="submit">
                                Sign Up
                            </button>
                        </fieldset>

                        <p className="text-center mt-4">
                            Already have an account?{" "}
                            <Link
                                to="/auth/login"
                                className="text-secondary underline font-medium"
                            >
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
