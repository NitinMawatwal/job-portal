import React, { useContext, useState } from "react";
import { Context } from "../main";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);
  const navigate = useNavigate();

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogout = () => {
    setIsAuthorized(false);
    setUser(null);
    navigate("/login");
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setShowMobileMenu(false); // close mobile menu on click
  };

  const navLinks = (
    <>
      <li>
        <Link
          className="hover:text-indigo-600 transition-colors duration-300 font-medium"
          to="/"
        >
          Home
        </Link>
      </li>

      {user?.userType === "recruiter" ? (
        <>
          <li>
            <Link
              className="hover:text-indigo-600 transition-colors duration-300 font-medium"
              to="/post/job"
            >
              Post Job
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-indigo-600 transition-colors duration-300 font-medium"
              to="/job/me"
            >
              My Jobs
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-indigo-600 transition-colors duration-300 font-medium"
              to="/dashboard/recruiter"
            >
              Dashboard
            </Link>
          </li>
        </>
      ) : (
        <li>
          <Link
            className="hover:text-indigo-600 transition-colors duration-300 font-medium"
            to="/job/getall"
          >
            All Jobs
          </Link>
        </li>
      )}

      <li>
        <button
          onClick={scrollToContact}
          className="hover:text-indigo-600 transition-colors duration-300 font-medium"
        >
          Contact Us
        </button>
      </li>

      {!isAuthorized ? (
        <>
          <li>
            <Link
              className="hover:text-indigo-600 transition-colors duration-300 font-semibold"
              to="/login"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-indigo-600 transition-colors duration-300 font-semibold"
              to="/register"
            >
              Signup
            </Link>
          </li>
        </>
      ) : (
        <li>
          <button
            onClick={handleLogout}
            className="hover:text-red-500 transition-colors duration-300 font-semibold"
          >
            Logout
          </button>
        </li>
      )}
    </>
  );

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 h-20">
      <div className="flex justify-between items-center px-6 lg:px-20 py-4 text-gray-700">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <span className="text-2xl font-semibold hover:text-indigo-600 transition-colors duration-300">
            NextHire
          </span>
        </Link>

        {/* Hamburger for mobile */}
        <div
          className="md:hidden text-3xl cursor-pointer hover:text-indigo-600 transition-colors duration-300"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <GiHamburgerMenu />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row gap-8 items-center text-lg">
          {navLinks}
        </ul>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <ul className="flex flex-col gap-4 px-6 py-6 md:hidden bg-white border-t shadow-md rounded-b-lg transition-all duration-300">
          {navLinks}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
