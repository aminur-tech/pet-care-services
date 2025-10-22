import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from '../Component/ServiceCard';
import HeroSlider from '../Component/HeroSlider';
import WinterTips from '../Component/WinterCare.jsx';

const Home = () => {
    const{ petCareData, heroData } = useLoaderData()
    console.log(petCareData, heroData)
    return (
        <div>
            {/* hero section */}
            <div className="mt-4 mb-4">
                <HeroSlider data={heroData}></HeroSlider>
            </div>


           {/* Popular Winter Care Services */}
            <div>
                <h1 className='mt-10  text-center text-3xl font-bold'>Popular Winter Care Services</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 mb-4 gap-8 justify-items-center'>
                    {
                        petCareData.map(service => <ServiceCard key={service.serviceId} service={service}></ServiceCard>)
                    }
                </div>
            </div>

            {/* winter health care tips */}
            <div className='mt-10'>
                <WinterTips></WinterTips>
            </div>


        </div>
    );
};

export default Home;