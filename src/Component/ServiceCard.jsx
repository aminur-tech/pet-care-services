import React from 'react';

const ServiceCard = ({ service }) => {
  const { image, serviceName, rating, price } = service;

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:scale-[1.02] transition-transform">
      {/* Image */}
      <img
        src={image}
        alt={serviceName}
        className="w-full h-62 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{serviceName}</h2>

        <div className="flex items-center justify-between mb-4">
          <span className="text-yellow-500 font-bold">⭐ {rating}</span>
          <span className="text-gray-700 font-semibold">${price}</span>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
