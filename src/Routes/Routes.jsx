import React from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../Pages/Home';
import Login from '../Component/Login';
import SignUp from '../Component/SignUp';
import AuthLayOut from '../Layouts/AuthLayOut';
import Loading from '../Component/Loading';
import PrivateRoutes from './PrivateRouter';
import ServiceDetails from '../Component/ServiceDetails';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [{
            index: true,
            path: '/',
            Component: Home,
            loader: () => fetch('/Pet_Care.json'),
            HydrateFallback: Loading
        }]
    },
    {
        path: "auth",
        Component: AuthLayOut,
        children: [
            { path: "/auth/login", Component: Login },
            { path: "/auth/signup", Component: SignUp },
        ],
    },

    {
        path: 'services/:serviceId',
        element:
            <PrivateRoutes>
                <ServiceDetails></ServiceDetails>
            </PrivateRoutes>,
        loader: () => fetch('/Pet_Care.json'),
        HydrateFallback:Loading

    }
]);