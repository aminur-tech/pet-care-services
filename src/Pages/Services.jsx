import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from '../Component/ServiceCard'; // Assuming ServiceCard uses modern styles
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { MdOutlineSort } from "react-icons/md"; // New sort icon for better context

const Services = () => {
    // Assuming useLoaderData() returns an array of service objects
    const services = useLoaderData() || [];

    const [search, setSearch] = useState('');
    const [sort, setSort] = useState(''); // "" | "low" | "high"

    // Helper to get the display text for the current sort state
    const getSortText = () => {
        switch (sort) {
            case 'low':
                return 'Price: Low → High';
            case 'high':
                return 'Price: High → Low';
            default:
                return 'Sort by Price';
        }
    };

    // FILTER + SORT LOGIC (Optimized for safety)
    const filteredServices = services
        .filter(service =>
            // Check if service.serviceName exists before calling toLowerCase()
            service.serviceName?.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
            if (sort === "low") return a.price - b.price;
            if (sort === "high") return b.price - a.price;
            return 0; // Maintain original order if no sort is applied
        });

    return (
        <div className="bg-white min-h-screen pt-10 pb-20">
            <div className="w-11/12 max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        🐶 **Premium Pet Care Services** ❄️
                    </h1>
                    <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                        Curated professional services to ensure your pets stay healthy, happy, and comfortable all year round.
                    </p>
                </div>

                {/* --- */}

                {/* SEARCH + SORT CONTROLS */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">

                    {/* SEARCH BAR (Prominent and modern) */}
                    <div className="relative w-full md:w-3/5 lg:w-2/5">

                        {/* Search Icon */}
                        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400 text-xl" />

                        {/* Input */}
                        <input
                            type="text"
                            placeholder="Search for grooming, vaccination, or training..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full py-3 pl-12 pr-4 rounded-full bg-white shadow-xl shadow-indigo-100/50 outline-none text-gray-700 placeholder-gray-400 text-base border-2 border-transparent focus:border-indigo-400 transition-all"
                        />
                    </div>


                    {/* SORT BUTTON (Primary style with clear icon) */}
                    <div className="dropdown dropdown-bottom dropdown-end w-full md:w-auto">
                        <div tabIndex={0} role="button" className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 text-white border-none rounded-full px-6 py-2 text-base shadow-md hover:shadow-lg transition-all w-full md:w-auto flex items-center">
                            <MdOutlineSort className="text-xl mr-2" />
                            {getSortText()}
                            <FiChevronDown className="ml-2" />
                        </div>
                        <ul
                            tabIndex="-1"
                            className="dropdown-content menu p-2 shadow-2xl bg-white rounded-xl w-56 mt-2 border border-gray-100 z-[10]"
                        >
                            <li>
                                <button
                                    onClick={() => setSort("low")}
                                    className={`text-gray-800 ${sort === 'low' ? 'bg-indigo-50 text-indigo-600 font-semibold' : 'hover:bg-gray-50'}`}
                                >
                                    Price: Low → High
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setSort("high")}
                                    className={`text-gray-800 ${sort === 'high' ? 'bg-indigo-50 text-indigo-600 font-semibold' : 'hover:bg-gray-50'}`}
                                >
                                    Price: High → Low
                                </button>
                            </li>
                            <div className="divider my-0"></div>
                            <li>
                                <button
                                    onClick={() => setSort("")}
                                    className="text-gray-500 hover:bg-gray-50"
                                >
                                    Reset Sort
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* --- */}

                {/* SERVICE GRID */}
                {filteredServices.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredServices.map(service => (
                            <ServiceCard
                                key={service.serviceId}
                                service={service}
                                // Added subtle hover effect and full card shadow
                                className="transform transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-2xl rounded-xl"
                            />
                        ))}
                    </div>
                ) : (
                    /* EMPTY STATE (Modernized) */
                    <div className="text-center py-20 bg-gray-50 rounded-xl border border-gray-200 mt-10">
                        <MdOutlineSort className="text-indigo-400 text-6xl mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800">
                            No Services Found
                        </h3>
                        <p className="mt-2 text-lg text-gray-500 max-w-md mx-auto">
                            We couldn't find any services matching your search or current filters. Try adjusting your search term or resetting the sort.
                        </p>
                        {/* Optional: Clear search button */}
                        {search && (
                            <button
                                onClick={() => setSearch('')}
                                className="mt-6 btn bg-indigo-600 hover:bg-indigo-700 text-white border-none rounded-full px-6 py-2 shadow-md transition-all"
                            >
                                Clear Search
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Services;