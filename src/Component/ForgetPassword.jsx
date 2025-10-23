import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../Providers/AuthContext';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router';

const ForgetPassword = () => {
    const { forgetPassword } = useContext(AuthContext);
    const emailRef = useRef();
    const navigate = useNavigate()
    const location = useLocation();
    const passedEmail = location.state?.email || '';
    // console.log(passedEmail)

    useEffect(() => {
        if (passedEmail) {
            emailRef.current.value = passedEmail;
        }
    }, [passedEmail]);

    const handleResetPassword = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;

        forgetPassword(email)
            .then(() => {
                navigate('/auth/login')
                toast.success('Password reset email has been sent! Check your inbox.');
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>

                    <form onSubmit={handleResetPassword} className="space-y-4">
                        <label className="label">Email</label>
                        <input
                            ref={emailRef}
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                        />
                        <button type="submit" className="btn btn-neutral w-full mt-3">
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
