import React, { useState } from 'react';

const SlidingImages = () => {
  // Array of 5 images
  const Images = Array.from({ length: 3 }, (_, index) => `/components/images/image${index + 1}.jpg`);


  // State to keep track of the current visible set of images
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to slide images forward
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - 2));
  };

  // Function to slide images backward
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length - 2) % (images.length - 2));
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* The wrapper for the images */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${(currentIndex * 100) / 3}%)`, // Move images horizontally
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-1/3 px-2">
            <img src={image} alt={`Image ${index + 1}`} className="object-cover w-full h-auto rounded-lg" />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 px-4 py-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full top-1/2"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 px-4 py-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full top-1/2"
      >
        &#10095;
      </button>
    </div>
  );
};

export default SlidingImages;
