import React from "react";
import job from "../assets/home.jpg";
import { useContext } from "react";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import image from "../assets/image.png";

const Home = () => {
  const navigate = useNavigate();
  const { isAuthorized, user } = useContext(Context);

  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-16 lg:py-24 text-white">
        {/* Text */}
        <div className="lg:max-w-xl text-center lg:text-left space-y-6">
          <h1 className="text-4xl py-6 lg:text-5xl font-extrabold leading-tight ">
            Discover your future with{" "}
            <span className="text-yellow-300">NextHire</span>
          </h1>

          {isAuthorized ? (
            <div className="bg-white text-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-cyan-500 mb-2">
                Welcome back, {user.name}!
              </h2>
              <p className="mb-1">
                You are logged in as{" "}
                <strong className="text-blue-500">{user.userType}</strong>.
              </p>
              {user.companyName && (
                <p className="mb-2">
                  Representing{" "}
                  <strong className="text-blue-500">{user.companyName}</strong>
                </p>
              )}
              <p className="text-gray-700">
                Use the dashboard to manage your jobs, applications, and
                profile.
              </p>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6">
              <button
                onClick={() => navigate("/register")}
                className="px-6 py-3 w-full sm:w-auto bg-yellow-400 text-gray-900 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 shadow-lg"
              >
                Create an Account
              </button>
              <button
                onClick={() => navigate("/login")}
                className="px-6 py-3 w-full sm:w-auto border-2 border-white rounded-full font-semibold hover:bg-white hover:text-blue-500 transition-all duration-300 shadow-lg"
              >
                Sign in with Email
              </button>
            </div>
          )}
        </div>

        {/* Image */}
        <div className="mt-10 lg:mt-0">
          <img
            src={job}
            alt="JOB"
            className="max-w-sm lg:max-w-md rounded-3xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-500"
          />
        </div>
      </div>

      {/* Post Job Section */}
      <div className="text-center py-20 bg-gradient-to-r from-blue-100 to-cyan-100 px-6">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-6">
          Post your job for{" "}
          <span className="text-cyan-500">millions of people</span> to see
        </h2>
        <button className="px-10 py-3 bg-cyan-500 text-white font-semibold rounded-full hover:bg-blue-500 transition-all duration-300 shadow-lg">
          Post a Job
        </button>
      </div>

      <div id="contact">
        <Contact />
      </div>

      {/* Footer Image */}
      <div className="px-6 mb-16">
        <img src={image} alt="illustration" className="w-full" />
      </div>
    </>
  );
};

export default Home;
