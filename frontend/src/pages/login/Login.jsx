import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Reset the error state
    setError("");

    // Validate the form fields
    if (!username || !password) {
      setError("Please fill in all the fields.");
      return;
    }

    // Proceed with login logic
    // ...
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-96 mx-auto">
      <div
        className="w-96 max-w-md p-8 rounded-lg shadow-md bg-blue-300 bg-clip-padding 
                      backdrop-filter backdrop-blur-lg bg-opacity-10"
      >
        <h1 className="text-2xl font-semibold text-center text-white">
          Login
          <span className="font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
            {" "}
            ChatApp
          </span>
        </h1>

        <form>
          <div>
            <label className="label p-2 mt-5">
              <span className="text-base label-text text-white">Email</span>
            </label>

            <input
              type="text"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full input input-bordered h-10 bg-gray-300 text-black placeholder:text-gray-600"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text mt-3 text-white">Password</span>
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full input input-bordered h-10 bg-gray-300 text-black placeholder:text-gray-600"              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 flex items-center text-black hover:text-gray-700 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <p className=" text-sm italic hover:underline flex-col items-center justify-center  hover:text-blue-500 mt-3">
            Forgot your password? <Link to="/forget-password">Click here</Link>
          </p>

          <div>
            <button
              className="w-full btn hover:bg-gradient-to-bl bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 
                                px-4 border border-blue-500 btn-sm mt-6 mb-2 h-10"
            >
              Login
            </button>
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <a
            href="/SignUp"
            className="flex text-sm text-white hover:underline flex-col items-center justify-center  hover:text-blue-500 mt-3"
          >
            Don't have an account? {"Sign Up"}
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
