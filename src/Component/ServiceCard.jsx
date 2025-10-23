import React from 'react';
import { Link } from 'react-router';

const ServiceCard = ({ service }) => {
  const {serviceId, image, serviceName, rating, price } = service;

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:scale-[1.03] transition-transform duration-300">
      {/* Image */}
      <div className="w-full h-60 overflow-hidden">
        <img
          src={image}
          alt={serviceName}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">{serviceName}</h2>

        <div className="flex items-center justify-between mb-4">
          <span className="text-yellow-500 font-bold">⭐ {rating}</span>
          <span className="text-gray-700 font-semibold">${price}</span>
        </div>
         

        <Link to={`/services/${serviceId}`} className="btn w-full bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-sky-500 transition-all duration-300 shadow-md">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
