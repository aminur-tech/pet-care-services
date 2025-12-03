import React from 'react';
import { FiTarget, FiHeart, FiZap, FiCheckCircle } from 'react-icons/fi';

// --- Placeholder Data for Content Sections ---
const teamMembers = [
    {
        name: "Aminur Rahman",
        title: "Founder & Lead Developer",
        image: "https://i.ibb.co.com/XfywHtS1/Messenger-creation-1-B992253-849-E-4-B9-A-800-C-A426-C07-CB2-DC.jpg", // Placeholder Image 1
        bio: "Driving the vision for accessible and quality service delivery with a focus on cutting-edge technology."
    },
    {
        name: "Jane Smith",
        title: "Head of Operations",
        image: "https://i.ibb.co.com/TDGFXXWH/download-14.jpg", // Placeholder Image 2
        bio: "Ensuring smooth service execution, efficiency, and exceptional customer satisfaction across all projects."
    },
    {
        name: "Michael Chen",
        title: "Client Relations Manager",
        image: "https://i.ibb.co.com/HTr5tc6S/David-Smith-NRT-scaled-e1635274621338.jpg", // Placeholder Image 3
        bio: "Building strong, long-lasting client relationships and gathering valuable feedback for continuous growth."
    }
];

const coreValues = [
    {
        icon: FiHeart,
        title: "Empathy",
        description: "We lead with understanding, treating every client and team member with respect and kindness."
    },
    {
        icon: FiCheckCircle,
        title: "Integrity",
        description: "Operating with absolute transparency and honesty, building trust in every interaction."
    },
    {
        icon: FiZap,
        title: "Innovation",
        description: "Continuously seeking better, smarter ways to solve problems and deliver exceptional value."
    },
    {
        icon: FiTarget,
        title: "Excellence",
        description: "Committed to the highest standards of quality and attention to detail in everything we do."
    },
];

const About = () => {
    return (
        <div className="bg-white min-h-screen">
            
            {/* 1. MISSION HERO SECTION */}
            <div className="bg-indigo-600 text-white py-20 md:py-32">
                <div className="w-11/12 max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                        Committed to Service Excellence
                    </h1>
                    <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto opacity-90">
                        Our mission is to bridge the gap between complex needs and simple, reliable solutions, driven by a passion for quality and innovation.
                    </p>
                    <div className="mt-8">
                        <a 
                            href="#values" 
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-indigo-600 bg-white hover:bg-gray-100 transition duration-300"
                        >
                            Explore Our Values
                        </a>
                    </div>
                </div>
            </div>

            ---
            
            {/* 2. OUR STORY & HISTORY */}
            <div className="py-16 bg-gray-50">
                <div className="w-11/12 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    
                    <div>
                        <span className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">Our Narrative</span>
                        <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                            More Than Just Service Providers
                        </h2>
                        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                            Founded with a simple yet powerful idea: services should be **transparent, accessible, and user-centric**. Starting locally, we quickly grew by prioritizing integrity and customer feedback above all else.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Today, we are a dedicated team focused on simplifying complex interactions. We believe in building **lasting trust** through consistent, high-quality execution and maintaining a strong commitment to continuous improvement.
                        </p>
                    </div>

                    <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
                        {/* Placeholder image for visual interest */}
                        
                        <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply">
                        <img src="https://i.ibb.co.com/PvCsVbKV/1.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            ---

            {/* 3. CORE VALUES SECTION */}
            <div id="values" className="py-16 md:py-24 bg-white">
                <div className="w-11/12 max-w-6xl mx-auto">
                    <h2 className="text-center text-4xl font-bold text-gray-900 mb-4">
                        The Pillars That Uphold Us
                    </h2>
                    <p className="text-center text-xl text-gray-500 max-w-3xl mx-auto mb-12">
                        These are the principles that guide every decision, interaction, and development within our company.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value, index) => (
                            <div 
                                key={index} 
                                className="p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-indigo-500 text-center"
                            >
                                <value.icon className="mx-auto text-5xl text-indigo-600 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            ---

            {/* 4. MEET THE TEAM SECTION */}
            <div className="py-16 md:py-24 bg-gray-100">
                <div className="w-11/12 max-w-6xl mx-auto">
                    <h2 className="text-center text-4xl font-bold text-gray-900 mb-12">
                        Meet Our Dedicated Team
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div 
                                key={index} 
                                className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl"
                            >
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="w-32 h-32 rounded-full object-cover mb-4 ring-4 ring-indigo-500 ring-offset-4 ring-offset-white"
                                />
                                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                <p className="text-indigo-600 text-sm font-medium mb-3">{member.title}</p>
                                <p className="text-gray-600 text-base">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;