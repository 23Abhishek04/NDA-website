import React from 'react';

const Industries = () => {
  const industries = ['Automotive', 'Healthcare', 'Consumer Goods'];

  return (
    <div className="container py-10 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Industries We Serve</h1>
      <ul className="ml-6 list-disc">
        {industries.map((industry, index) => (
          <li key={index} className="text-lg">{industry}</li>
        ))}
      </ul>
    </div>
  );
};

export default Industries;
