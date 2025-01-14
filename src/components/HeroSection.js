import React from "react";
import { Link } from "react-router-dom";
import WelcomeSection from "./WelcomeSection"; // Import the WelcomeSection component

const HeroSection = ({ title, subtitle, buttonText }) => {
  // Array of image paths in the public/images folder (for images 1.jpg, 2.jpg, etc.)
  const images = Array.from({ length: 3 }, (_, index) => `/components/images/image${index + 1}.jpg`);

  return (
    <div className="relative bg-gray-50">
      <div className="container px-4 py-16 mx-auto lg:px-8">
        {/* Background decorative shapes */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-400 opacity-20 -z-10"></div>
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Content */}
          <div>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-800 md:text-5xl">
              Transforming Ideas into{" "}
              <span className="text-blue-500">Innovative</span> Solutions
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Empowering industries with cutting-edge plastic technologies that
              drive sustainability and efficiency. Discover our range of
              customized solutions tailored to meet your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <button className="px-6 py-3 text-white transition bg-blue-500 rounded-lg shadow hover:bg-blue-600">
                Explore More
              </button>
              <Link
                to="/contact"
                className="px-6 py-3 text-blue-500 transition border-2 border-blue-500 rounded-lg shadow hover:bg-blue-500 hover:text-white"
              >
                Contact Us
              </Link>
            </div>

            {/* Insert WelcomeSection here */}
            <div className="mt-12">
              <WelcomeSection />
            </div>
          </div>

          {/* Right Image with Sliding Images */}
          <div className="relative">
            <div className="text-6xl font-bold text-center text-black">
              Welcome
            </div>
            <div className="mt-2 text-2xl font-semibold text-center text-blue-600">
              to NDA Plastech
            </div>
            <div className="absolute w-20 h-20 bg-blue-100 rounded-full shadow-md -top-4 -right-4"></div>
            <div className="absolute w-20 h-20 bg-green-100 rounded-full shadow-md -bottom-4 -left-4"></div>

            {/* Sliding images section */}
            <div className="w-full mt-12 overflow-hidden">
              <div className="flex animate-slide">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image} // Directly reference image path from public folder
                    alt={`Image ${index + 1}`}
                    className="object-cover w-full h-auto sm:w-1/2 md:w-1/3 lg:w-1/4"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

<style jsx>{`
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-33.33%);
    }
    50% {
      transform: translateX(-66.66%);
    }
    75% {
      transform: translateX(-99.99%);
    }
    100% {
      transform: translateX(0);
    }
  }

  .animate-slide {
    animation: slide 12s linear infinite;
  }

  .animate-slide img {
    width: 100%;
    /* Ensure images occupy 1/2, 1/3 or 1/4 of the container width based on screen size */
  }
`}</style>
