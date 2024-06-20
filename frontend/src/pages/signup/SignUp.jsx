import React from 'react'
import Gender from './Gender';

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-blue-300 bg-clip-padding 
                      backdrop-filter backdrop-blur-lg bg-opacity-10"
      >
        <h1 className="text-2xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form>
        <div>
            <label className="label p-2 mt-5">
              <span className="text-base label-text">Full Name</span>
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text mt-3">Username</span>
            </label>

            <input
              type="text"
              placeholder="Create an username"
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
          <div>
            <label className="label">
              <span className="text-base label-text mt-3">Confirm Password</span>
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <Gender />

          <a href="#" className="flex text-sm hover:underline flex-col items-center justify-center  hover:text-blue-500 mt-3">
          Already have an account? {"Login"}

          </a>

            <div>

            <button className="w-full btn hover:bg-gradient-to-bl bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 
                                px-4 border border-blue-500 btn-sm mt-6 mb-2">SignUp</button>

            </div>

        </form>
      </div>
    </div>
  );
};

export default SignUp
