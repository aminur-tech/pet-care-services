import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from '../Component/ServiceCard';
import HeroSlider from '../Component/HeroSlider';
import WinterTips from '../Component/WinterCare.jsx';
import ExpertVetsData from '../Component/ExpertVetsData.jsx';
import Testimonials from '../Component/Testimonials.jsx';

const Home = () => {
    const petCareData = useLoaderData()
    
    return (
        <div>
            {/* hero section */}
            <div className='mt-2'>
                <HeroSlider></HeroSlider>
            </div>


           {/* Popular Winter Care Services */}
            <div className='mt-20'>
                <h1 className='text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900'>Popular Winter Care Services</h1>
                <div className='grid grid-cols-2 lg:grid-cols-4 mt-8 mb-4 gap-4 justify-items-center'>
                    {
                        petCareData.map(service => <ServiceCard key={service.serviceId} service={service}></ServiceCard>)
                    }
                </div>
            </div>

            {/* winter health care tips */}
            <div className='mt-20'>
                <WinterTips></WinterTips>
            </div>

            {/* expert vats */}
            <div className='mt-20'>
                <ExpertVetsData></ExpertVetsData>
            </div>

            {/* Testimonials */}
            <div className='mt-20'>
                <Testimonials></Testimonials>
            </div>


        </div>
    );
};

export default Home;