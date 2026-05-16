import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4 text-center">
        Connect with NextHire
      </h1>
      {/* added description */}
      <p className="text-gray-600 text-center max-w-2xl mb-12 text-lg">
        At <span className="font-semibold text-indigo-600">NextHire</span>, we
        care about our users and their experiences. Whether you have a question,
        feedback, or just want to say hello, reach out to us anytime!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/sumit_yadav1811/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-1 hover:scale-105"
        >
          <FaInstagram size={60} className="text-pink-500 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Instagram
          </h2>
          <p className="text-gray-600 text-center">
            Follow us on Instagram for updates, stories, and behind-the-scenes
            at NextHire.
          </p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sumit-kumar-yadav-webdev/"
          className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-1 hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={60} className="text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">LinkedIn</h2>
          <p className="text-gray-600 text-center">
            Connect professionally with us on LinkedIn and explore opportunities
            with NextHire.
          </p>
        </a>

        {/* Email */}
        <a
          href="mailto:nexthire@gmail.com"
          className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-1 hover:scale-105"
        >
          <FaEnvelope size={60} className="text-red-500 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Email</h2>
          <p className="text-gray-600 text-center">
            Send us an email directly for support, feedback, or any queries.
            We’ll respond promptly!
          </p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
