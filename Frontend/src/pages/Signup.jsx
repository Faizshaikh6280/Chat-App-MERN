import React from "react";
import GenderCheckbox from "../components/GenderCheckbox.jsx";
const Signup = () => {
  return (
    <div className="flex flex-col min-w-96 mx-auto items-center justify-center">
      <div className="w-full p-6 rounded-lg bg-gray-400 shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup <span className="text-blue-500">Chat App</span>
        </h1>
        <form action="">
          <div>
            <label htmlFor="name" className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full input input-bordered h-10"
              id="name"
            />
          </div>
          <div>
            <label htmlFor="username" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              id="username"
            />
          </div>
          <div>
            <label htmlFor="password" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              id="password"
            />
          </div>
          <div>
            <label htmlFor="conifrmPassword" className="label p-2">
              <span className="text-base label-text">Conifrm Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter conifrmPassword"
              className="w-full input input-bordered h-10"
              id="conifrmPassword"
            />
          </div>
          {/* Gender checkbox does here */}
          <GenderCheckbox />

          <a href="#">Already have an account?</a>
          <div>
            <button className="btn btn-block btn-sm mt-2">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
