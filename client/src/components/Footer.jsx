import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <span className="text-2xl font-semibold text-white hover:text-indigo-500 transition-colors duration-300">
              NextHire
            </span>
          </Link>
          <p className="text-gray-400">
            NextHire is your go-to platform for finding top talent and exciting
            job opportunities. Connecting recruiters and job seekers seamlessly.
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/nitin-mawatwal/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/nexthire.official/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/job/getall"
                className="hover:text-white transition-colors duration-300"
              >
                All Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/post/job"
                className="hover:text-white transition-colors duration-300"
              >
                Post a Job
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-white transition-colors duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 mb-2">
            Email: nittinmawatwal@gmail.com
          </p>
          <p className="text-gray-400 mb-2">Phone: +91 9376838329</p>
          <p className="text-gray-400">
            Address: Kundli, Sonepat Haryana India
          </p>
        </div>
      </div>

      <div className="bg-gray-800 text-gray-500 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} NextHire. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;