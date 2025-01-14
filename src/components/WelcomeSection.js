import React from "react";
import { Link } from "react-router-dom";

const WelcomeSection = () => {
  return (
    <div className="max-w-4xl p-8 mx-auto my-10 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="mb-2 text-3xl font-bold text-center text-indigo-600">
        Welcome to NDA Plastech
      </h1>
      <h2 className="mb-4 text-xl font-semibold text-center text-gray-700">
        Innovative products. Global needs.
      </h2>
      <p className="mb-6 leading-relaxed text-center text-gray-600">
        Established in 1994 by Mr. D. B. Asabe, NDA Plastech has soon become the name of trust for our well-reputed and dignified customers in case of need. 
        We build relations beyond business, which has worked in favor of our team for re-engineering the word of IMPOSSIBLE to "I M POSSIBLE".
      </p>
      <div className="text-center">
        
        <Link to="/about" className= "px-6 py-3 font-semibold text-white transition-all rounded-lg shadow-md bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700" >
            
          Read More
        
          </Link>
      </div>
    </div>
  );
};

export default WelcomeSection;
