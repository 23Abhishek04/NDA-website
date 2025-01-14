import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
      <img 
        src={image} 
        alt={title} 
        className="object-cover w-full h-40 sm:h-48 md:h-56 lg:h-64" 
      />
      <div className="p-4">
        <h3 className="mb-2 text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
