import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from "react-router";
import Footer from '../Component/Footer';


const AuthLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default AuthLayOut;