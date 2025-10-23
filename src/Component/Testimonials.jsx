import React from "react";
import "animate.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    pet: "Bella (Golden Retriever)",
    feedback:
      "The winter diet plan helped Bella stay energetic all season. The team was super helpful and professional!",
    image: "https://i.ibb.co.com/dsFkrXhZ/download-10.jpg",
  },
  {
    id: 2,
    name: "David Miller",
    pet: "Luna (Siamese Cat)",
    feedback:
      "Luna’s fur looks healthier and she’s more playful than ever. Highly recommend these services!",
    image: "https://i.ibb.co.com/cVVCMMr/download-1.jpg",
  },
  {
    id: 3,
    name: "Emily Carter",
    pet: "Rocky (Bulldog)",
    feedback:
      "Expert vets provided amazing guidance for Rocky’s winter skin care. Very satisfied!",
    image: "https://i.ibb.co.com/KpjKCSXZ/download.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-12 px-6 rounded-2xl">
      {/* Animated Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10 animate__animated animate__fadeInDown">
        Happy Pet Owners
      </h2>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={t.id}
            className={`bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 animate__animated animate__fadeInUp animate__delay-${index + 1}s`}
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-blue-400 animate__animated animate__zoomIn"
            />
            <p className="text-gray-600 italic mb-3">"{t.feedback}"</p>
            <h3 className="font-semibold text-gray-900">{t.name}</h3>
            <span className="text-sm text-gray-500">{t.pet}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
