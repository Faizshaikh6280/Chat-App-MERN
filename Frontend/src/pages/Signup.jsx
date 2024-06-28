import React, { useState } from "react";
import GenderCheckbox from "../components/GenderCheckbox.jsx";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup.js";
import toast from "react-hot-toast";

const initialFormState = {
  name: "",
  username: "",
  password: "",
  confirmPassword: "",
  gender: "male",
};

const Signup = () => {
  const [inputs, setInputs] = useState(initialFormState);
  const { loading, signup } = useSignup();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signup(inputs);
      toast(`Account created Successfully!`, {
        icon: "😊",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } catch (error) {
      toast.error(error.message);
    }
  }

  function handleSelectGender(gender) {
    setInputs({ ...inputs, gender });
  }

  return (
    <div className="flex flex-col min-w-96 mx-auto items-center justify-center">
      <div className="w-full p-6 rounded-lg bg-gray-400 shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup <span className="text-blue-500">Chat App</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              value={inputs.name}
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
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
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              type="password"
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
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              type="password"
              placeholder="Enter conifrmPassword"
              className="w-full input input-bordered h-10"
              id="conifrmPassword"
            />
          </div>
          {/* Gender checkbox does here */}
          <GenderCheckbox
            onCheckboxChange={handleSelectGender}
            selectedGender={inputs.gender}
          />

          <Link to="/login">Already have an account?</Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Signup"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
