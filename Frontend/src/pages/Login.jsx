import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin.js";
import toast from "react-hot-toast";
import { useAuthContext } from "../contexts/AuthContext.jsx";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { loading, login } = useLogin();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const logedUser = await login({ username, password });
      if (logedUser) {
        toast(`Welcom Back ${logedUser.fullname.split(" ")[0]}!`, {
          icon: "😍",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="flex flex-col min-w-96 mx-auto items-center justify-center">
      <div className="w-full p-6 rounded-lg bg-gray-400 shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-100">
          Login <span className="text-blue-500">Chat App</span>
        </h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="/signup">Don't have an account?</Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"> </span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
