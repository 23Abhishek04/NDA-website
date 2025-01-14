import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 text-center bg-secondary text-primary">
      <p className="text-sm sm:text-base md:text-lg">
        &copy; {new Date().getFullYear()} NDA Plastech. All rights reserved.
      </p>
      <p className="mt-2 text-xs sm:text-sm md:text-base">
        Privacy Policy | Terms of Service
      </p>
    </footer>
  );
};

export default Footer;
