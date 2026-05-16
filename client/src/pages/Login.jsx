import React, { useState, useContext } from "react";
import axios from "axios";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const { setIsAuthorized, setUser } = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log("Data sent by login is", form);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        form
      );
      const { user } = response.data;
      setIsAuthorized(true);
      setUser(user);

      if (user) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      setIsAuthorized(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        {/* Left Side - Welcome Message */}
        <div className="bg-green-400 md:w-1/2 flex flex-col justify-center items-center text-white p-10">
          <h1 className="text-4xl font-extrabold mb-4 text-center">
            Welcome Back!
          </h1>
          <p className="text-center text-lg">
            Redefine what’s possible in your career with NextHire. Sign in to
            continue your journey.
          </p>
        </div>

        {/* Right Side - Login Form */}
        <div className="md:w-1/2 flex flex-col justify-center p-10">
          <h4 className="text-2xl font-semibold mb-6 text-gray-800">
            Login to your account
          </h4>
          <form onSubmit={submitHandler} className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={form.email}
                className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="mb-1 font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={form.password}
                className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="bg-green-400 text-white font-semibold text-lg py-2 rounded-xl hover:bg-green-500 transition-colors"
            >
              Login
            </button>
          </form>
          <p className="text-gray-500 text-sm mt-4 text-center">
            Don't have an account?{" "}
            <span className="text-green-400 font-medium cursor-pointer">
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
