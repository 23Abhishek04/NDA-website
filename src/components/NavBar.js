import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import NDA from "./assest/NDA.png";
import rightlogo from "./assest/rightlogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <nav className="text-white shadow-lg bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-400">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto h-36">
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

        {/* Right Side (Contact Info & Logo) */}
        <div className="items-center hidden space-x-4 md:flex">
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

        {/* Hamburger Menu (Mobile View) */}
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="container flex items-center justify-center hidden p-2 space-x-6 rounded-t-lg md:flex">
        <Link to="/" className="px-4 py-2 rounded hover:bg-indigo-700">
          <i className="fa-solid fa-house mr-1.5 text-sm"></i>Home
        </Link>
        <Link to="/about" className="px-4 py-2 rounded hover:bg-indigo-700">
          About Us
        </Link>

        {/* Products Dropdown */}
        <div className="relative">
          <button
            className="px-4 py-2 rounded hover:bg-indigo-700"
            onClick={() => setIsProductsOpen(!isProductsOpen)}
          >
            Products
          </button>
          {isProductsOpen && (
            <div className="absolute left-0 z-10 w-48 mt-2 text-blue-600 bg-white shadow-md">
              <Link
                to="/products/frp-cabin"
                className="block px-4 py-2 hover:bg-indigo-100"
              >
                FRP Cabin
              </Link>
              <Link
                to="/products/frp-toilet"
                className="block px-4 py-2 hover:bg-indigo-100"
              >
                FRP Toilet
              </Link>
              <Link
                to="/products/frp-dome"
                className="block px-4 py-2 hover:bg-indigo-100"
              >
                FRP Dome
              </Link>
              <Link
                to="/products/frp-door"
                className="block px-4 py-2 hover:bg-indigo-100"
              >
                FRP Door
              </Link>
              <Link
                to="/products/frp-boat"
                className="block px-4 py-2 hover:bg-indigo-100"
              >
                FRP Boat
              </Link>
              <Link
                to="/products/frp-dustbin"
                className="block px-4 py-2 hover:bg-indigo-100"
              >
                FRP Dustbin
              </Link>
            </div>
          )}
        </div>

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

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="p-4 space-y-4 bg-indigo-600 md:hidden">
          <Link to="/" className="block px-4 py-2 text-white">
            Home
          </Link>
          <Link to="/about" className="block px-4 py-2 text-white">
            About Us
          </Link>

          {/* Products Dropdown (Mobile) */}
          <div className="relative">
            <button
              className="block w-full px-4 py-2 text-white"
              onClick={() => setIsProductsOpen(!isProductsOpen)}
            >
              Products
            </button>
            {isProductsOpen && (
              <div className="mt-2 text-blue-600 bg-white shadow-md">
                <Link
                  to="/products/frp-cabin"
                  className="block px-4 py-2 hover:bg-indigo-100"
                >
                  FRP Cabin
                </Link>
                <Link
                  to="/products/frp-toilet"
                  className="block px-4 py-2 hover:bg-indigo-100"
                >
                  FRP Toilet
                </Link>
                <Link
                  to="/products/frp-dome"
                  className="block px-4 py-2 hover:bg-indigo-100"
                >
                  FRP Dome
                </Link>
                <Link
                  to="/products/frp-door"
                  className="block px-4 py-2 hover:bg-indigo-100"
                >
                  FRP Door
                </Link>
                <Link
                  to="/products/frp-boat"
                  className="block px-4 py-2 hover:bg-indigo-100"
                >
                  FRP Boat
                </Link>
                <Link
                  to="/products/frp-dustbin"
                  className="block px-4 py-2 hover:bg-indigo-100"
                >
                  FRP Dustbin
                </Link>
              </div>
            )}
          </div>

          <Link to="/client" className="block px-4 py-2 text-white">
            Client
          </Link>
          <Link to="/gallery" className="block px-4 py-2 text-white">
            Gallery
          </Link>
          <Link to="/enquiry" className="block px-4 py-2 text-white">
            Enquiry
          </Link>
          <Link to="/blog" className="block px-4 py-2 text-white">
            Blog
          </Link>
          <Link to="/contact" className="block px-4 py-2 text-white">
            Contact Us
          </Link>
        </div>
      )}

      {/* Search Section */}
      <div className="container flex justify-center ">
        <form
          action="https://www.google.com/search"
          method="GET"
          target="_blank"
          className="flex items-center space-x-2"
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
