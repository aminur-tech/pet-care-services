import React from 'react';
import { expertVets } from './expertVets';
import { Mail, Phone, MapPin } from 'lucide-react';

const ExpertVetsData = () => {
  return (
    <div>
      <div className="px-4 sm:px-6 md:px-10 py-10 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
          Meet Our Expert Vets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertVets.map((vet) => (
            <div
              key={vet.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden text-center hover:scale-105 transition-transform duration-300"
            >
              {/* Vet Image */}
              <div className="w-full h-60 overflow-hidden">
                <img
                  src={vet.image}
                  alt={vet.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Vet Info */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1">{vet.name}</h3>
                <p className="text-gray-500 mb-2">{vet.specialty}</p>
                <p className="text-gray-700 font-medium mb-3">
                  {vet.experience}
                </p>

                  <div className="divider"></div>

                {/* Contact Info */}
                <div className="text-sm text-gray-600 space-y-1 mt-3">
                  <p className="flex items-center justify-center gap-2">
                    <Phone size={16} className="text-blue-500" /> {vet.phone}
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Mail size={16} className="text-blue-500" /> {vet.email}
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <MapPin size={16} className="text-blue-500" /> {vet.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertVetsData;
