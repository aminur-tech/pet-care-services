import React from 'react';
import { useLoaderData } from 'react-router';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import ServiceCard from '../Component/ServiceCard';

const Services = () => {
    const services = useLoaderData()
    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-10 mb-10'>
                {
                    services.map(service => <ServiceCard service={service} key={service.serviceId}></ServiceCard>)
                }

            </main>
            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default Services;