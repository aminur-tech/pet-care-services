import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from "react-router";


const AuthLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default AuthLayOut;