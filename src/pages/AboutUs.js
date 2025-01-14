import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="py-10 bg-gray-50">
      <div className="container px-6 mx-auto">
        {/* Section Heading */}
        <motion.h1
          className="mb-8 text-4xl font-bold text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>

        {/* Main Content */}
        <motion.p
          className="mb-10 text-lg leading-relaxed text-center text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          NDA Plastech was established in 1994 by Mr. D. B. Asabe with the sole objective of giving strong and durable
          FRP products to the world. In its short stint, the company has carved a niche for itself and has earned a
          reputation for being the most dynamic and reliable company when it comes to supplying strong and durable FRP
          products.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed text-center text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          We have had an elite list of clientele which includes Tata Motors, Bajaj Auto, Mahindra & Mahindra, Alfa
          Laval, Tetra Pack, Volkswagen, Kirloskar, Cummins, General Motors, Government & Semi Government
          organizations. Our strength has been our commitment towards quality, our team of qualified professionals, the
          resources we have at our disposal, the satisfaction and delight of our customers, and the trust our esteemed
          customers have shown in us.
        </motion.p>

        {/* Vision and Mission Section */}
        <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2">
          {/* Vision */}
          <motion.div
            className="p-6 text-center bg-white rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4 text-4xl text-blue-600">
              <i className="fas fa-eye"></i>
            </div>
            <h3 className="mb-4 text-xl font-bold text-gray-800">Our Company Vision</h3>
            <p className="leading-relaxed text-gray-600">
              No organization has ever stood the test of time without the trust and satisfaction of its customers. Our
              vision is to build on the trust of our customers and serve them with dedication and quality. Our vision is
              to set benchmarks in the FRP manufacturing industry and take the quality level to new heights.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="p-6 text-center bg-white rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4 text-4xl text-blue-600">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3 className="mb-4 text-xl font-bold text-gray-800">Our Company Mission</h3>
            <p className="leading-relaxed text-gray-600">
              To manufacture sustainable products which provide cost-efficient solutions to clients and customers,
              structural performance, and durability of materials over many conventional materials.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
