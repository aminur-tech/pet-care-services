import Navbar from './Navbar';
import Footer from './Footer';
import { useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify';



const ServiceDetails = () => {
    const { serviceId } = useParams();
    const services = useLoaderData();

    const service = services.find(
        (item) => item.serviceId === parseInt(serviceId)
    );

    const { image, serviceName, price, rating, providerName, providerEmail, description } =
        service;

    // form control
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value 
        const email = form.email.value
        console.log(name, email)
        toast.success("🎉 Service booked successfully!");
        form.reset();
    };


    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 mt-8 mb-8">
                    {/* Image */}
                    <img
                        src={image}
                        alt={serviceName}
                        className="w-full h-80 object-cover"
                    />

                    {/* Details Section */}
                    <div className="p-6 md:p-10">
                        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
                            {serviceName}
                        </h1>
                        <p className="text-gray-600 text-lg mb-6">{description}</p>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-2">
                            <p className="text-gray-700">
                                Rating: ⭐ <span className="font-semibold">{rating}</span>
                            </p>
                            <p className="text-lg font-semibold text-blue-600">
                                Price: ${price}
                            </p>
                        </div>

                        <div className="border-t border-gray-200 pt-4 mb-8">
                            <p className="text-gray-700">
                                <span className="font-medium">Provider:</span> {providerName}
                            </p>
                            <p className="text-gray-700">
                                <span className="font-medium">Email:</span> {providerEmail}
                            </p>
                        </div>

                        {/* Book Service Form */}
                        <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                                Book This Service
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-sky-500 transition-all duration-200"
                                >
                                    Book Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;