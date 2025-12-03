import React from "react";
import { winterPetCareTips } from "./winterpetCareTips";

const WinterTips = () => {
  return (
    <div>
      <h2 className="text-3xl text-center font-bold py-6">Our Winter Tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {winterPetCareTips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white shadow-md rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-4">{tip.icon}</div>
            <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
            <p className="text-gray-700">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterTips;
