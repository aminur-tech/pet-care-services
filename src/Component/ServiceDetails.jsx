import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";
// Using simple icons for demonstration. In a real app, you'd import from react-icons, lucide, etc.
// For this example, I'll use simple text icons (emojis).

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const services = useLoaderData();

  const service = services.find(
    (item) => item.serviceId === parseInt(serviceId)
  );

  if (!service) {
    return (
      <div className="w-11/12 mx-auto text-center mt-20">
        <h2 className="text-3xl font-bold text-gray-800">
          Service Not Found 😔
        </h2>
        <p className="text-gray-600 mt-2">The service you are looking for may have been removed or the link is incorrect.</p>
      </div>
    );
  }

  const {
    image,
    serviceName,
    price,
    rating,
    providerName,
    providerEmail,
    description,
    features,
    schedule,
    location,
  } = service;

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would make an API call here.
    const form = e.target;
    // const name = form.name.value;
    // const email = form.email.value;
    toast.success("🎉 Service booked successfully! We'll confirm via email.");
    form.reset();
  };

  return (
    <div className="w-11/12 mx-auto py-12 md:py-20">
      {/* Increased max-width and added a main grid layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Service Details Card (Col 1 & 2) */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          
          {/* Service Image */}
          <img src={image} alt={serviceName} className="w-full h-96 object-cover" />
          
          <div className="p-6 md:p-10">
            {/* Header Section */}
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">{serviceName}</h1>
            <p className="text-gray-700 text-xl mb-8 leading-relaxed">{description}</p>

            {/* Price and Rating Badge/Chip Section */}
            <div className="flex flex-wrap items-center justify-between mb-8 p-5 bg-blue-50/70 rounded-xl border border-blue-100">
                <p className="text-xl text-gray-700 flex items-center gap-2">
                    <span className="text-yellow-500 text-3xl">★</span> 
                    Rating: <span className="font-bold text-gray-800">{rating}</span> / 5
                </p>
                <div className="bg-blue-600 text-white px-5 py-2 rounded-full text-2xl font-extrabold shadow-lg shadow-blue-300/50">
                    ${price}
                </div>
            </div>
            
            <hr className="my-8 border-gray-100" />
            
            {/* Provider and Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <p className="text-gray-700 flex items-center gap-2">
                <span className="font-medium text-lg text-blue-600">👤 Provider:</span> {providerName}
              </p>
              <p className="text-gray-700 flex items-center gap-2">
                <span className="font-medium text-lg text-blue-600">📧 Email:</span> {providerEmail}
              </p>
            </div>

            {/* Features List with Grid/Icons */}
            <div className="mb-10 p-6 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="font-bold text-2xl text-gray-800 mb-4 border-b pb-3">✨ Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-gray-700">
                    {features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">✅</span> {f}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Schedule and Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
                <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2 flex items-center gap-2">⏰ Schedule</h3>
                    <p className="text-gray-700 pl-1">{schedule.days.join(", ")}</p>
                    <p className="text-gray-600 text-sm pl-1">Hours: {schedule.hours}</p>
                </div>
                <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2 flex items-center gap-2">📍 Location</h3>
                    <p className="text-gray-700 pl-1">{location.type} - {location.address}</p>
                    <p className="text-gray-600 text-sm pl-1">{location.city}</p>
                </div>
            </div>
          </div>
        </div>

        {/* Booking Form (Col 3) - Made slightly sticky on large screens */}
        <div className="lg:col-span-1 lg:sticky lg:top-8 self-start">
          <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-200">
            <h2 className="text-2xl font-bold mb-5 text-gray-900 border-b pb-3">Book This Service</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-colors" 
                  placeholder="Enter your name" 
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-colors" 
                  placeholder="Enter your email" 
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.01] shadow-xl shadow-blue-300/50"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;