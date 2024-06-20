import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-blue-300 bg-clip-padding 
                      backdrop-filter backdrop-blur-lg bg-opacity-10"
      >
        <h1 className="text-2xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2 mt-5">
              <span className="text-base label-text">Username</span>
            </label>

            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text mt-3">Password</span>
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <a href="#" className="flex text-sm hover:underline flex-col items-center justify-center  hover:text-blue-500 mt-3">
          Don't have an account? {"Sign Up"}

          </a>

            <div>

            <button className="w-full btn hover:bg-gradient-to-bl bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 
                                px-4 border border-blue-500 btn-sm mt-6 mb-2">Login</button>

            </div>

        </form>
      </div>
    </div>
  );
};

export default Login;
