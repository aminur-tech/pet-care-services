import { Eye, EyeOff } from 'lucide-react';
import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Providers/AuthContext';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('')
  const { signInUser } = use(AuthContext)
  const location = useLocation()
  const Navigate = useNavigate()
  // console.log(location)

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then(result => {
        console.log(result.user)
        Navigate(`${location.state ? location.state : '/'}`)
        form.reset()
      })
      .catch(error => {
         if (error.code === "auth/user-not-found") {
          setError("No account found with this email.");
        } else if (error.code === "auth/wrong-password") {
          setError("Incorrect password. Please try again.");
        } else {
          setError("Login failed. Please check your email and password.");
        }
      });

  }



  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <h2 className="text-2xl font-bold text-center mb-4">Login to Your Account</h2>

            <fieldset className="fieldset space-y-2">
              <label className="label">Email</label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Email"
                name="email"
              />

              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full"
                  placeholder="Password"
                  name="password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-7 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <div className="mt-2 text-right">
                <a className="link link-hover">Forgot password?</a>
              </div>

               {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

              <button type='submit' className="btn btn-neutral w-full mt-4">Login</button>
            </fieldset>

            <p className="text-center mt-4">
              Don't have an account?{" "}
              <Link
                to="/auth/signup"
                className="text-secondary underline font-medium"
              >
                Sign Up
              </Link>
            </p>

            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
