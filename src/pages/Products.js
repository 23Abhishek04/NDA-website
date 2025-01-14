import React from 'react';
import Card from '../components/Card';

const Products = () => {
  const products = [
    { 
      title: 'Injection Molded Components', 
      description: 'Durable and precise components.', 
      image: '/assets/product1.jpg', 
      alt: 'Injection Molded Components Image'
    },
    { 
      title: 'Custom Plastic Solutions', 
      description: 'Tailored solutions for your needs.', 
      image: '/assets/product2.jpg',
      alt: 'Custom Plastic Solutions Image'
    },
  ];

  return (
    <div className="container grid grid-cols-1 gap-6 py-10 mx-auto sm:grid-cols-2">
      {products.map((product, index) => (
        <Card key={index} {...product} />
      ))}
    </div>
  );
};

export default Products;
