import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import NDA from "./assest/NDA.png";
import rightlogo from "./assest/rightlogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="text-white shadow-lg bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-400">
      <div className="container flex items-center justify-between h-32 px-4 py-4 mx-auto">
        {/* Logo Left */}
        <div className="flex items-center space-x-2">
          <motion.div
            className="text-2xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/">
              <img src={NDA} alt="Company Logo" className="w-48 h-24 mr-2" />
            </Link>
          </motion.div>
        </div>

        {/* Right Side (Social Media & Logo) */}
        <div className="flex items-center space-x-4">
          {/* Social Media Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61553223065692"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-blue-600 rounded-full hover:bg-blue-700"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/nda-plastech/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-blue-800 rounded-full hover:bg-blue-900"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/ndaplastech2/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-pink-600 rounded-full hover:bg-pink-700"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          {/* Right Logo */}
          <motion.div
            className="flex items-center justify-center space-x-2 text-2xl font-bold"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex flex-col items-center justify-center">
              <div className="flex items-center space-x-2 text-sm font-normal text-black">
                <span>
                  <i className="fa-solid fa-phone"></i> +91 9923101417
                </span>
                <span>
                  <i className="fa-solid fa-envelope"></i> enquiry@ndaplastech.com
                </span>
              </div>
              <div>
                <img
                  src={rightlogo}
                  alt="Company Logo"
                  className="w-48 h-24 mr-2"
                />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
      {/* Navigation and Search in a Single Row */}
      <div className="flex flex-col items-center justify-center w-full bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-400">

        <div className="flex flex-wrap items-center justify-center p-4 space-x-4">
          <Link to="/" className="px-4 py-2 rounded hover:bg-indigo-700">
            <i className="fa-solid fa-house mr-1.5 text-sm"></i>Home
          </Link>
          <Link to="/about" className="px-4 py-2 rounded hover:bg-indigo-700">
            About Us
          </Link>
          <Link to="/product" className="px-4 py-2 rounded hover:bg-indigo-700">
            Products
          </Link>
          <Link to="/client" className="px-4 py-2 rounded hover:bg-indigo-700">
            Client
          </Link>
          <Link to="/gallery" className="px-4 py-2 rounded hover:bg-indigo-700">
            Gallery
          </Link>
          <Link to="/enquiry" className="px-4 py-2 rounded hover:bg-indigo-700">
            Enquiry
          </Link>
          <Link to="/blog" className="px-4 py-2 rounded hover:bg-indigo-700">
            <i className="fa-solid fa-blog mr-1.5 text-sm"></i>Blog
          </Link>
          <Link to="/contact" className="px-4 py-2 rounded hover:bg-indigo-700">
            <i className="mr-1 text-sm fa-solid fa-phone"></i> Contact Us
          </Link>
        </div>
        <form
          action="https://www.google.com/search"
          method="GET"
          target="_blank"
          className="flex items-center justify-center mb-2 space-x-2"
        >
          <input
            type="text"
            name="q"
            placeholder="Search here"
            className="px-4 py-2 text-black border rounded focus:outline-none focus:ring focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;