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
import My_Profile from '../Pages/My_Profile';
import UpdateProfile from '../Pages/UpdateProfile';
import Services from '../Pages/Services';
import ForgetPassword from '../Component/ForgetPassword';


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
        },

        ]
    },
    {
        path: "auth",
        Component: AuthLayOut,
        children: [
            { path: "/auth/login", Component: Login },
            { path: "/auth/signup", Component: SignUp },
            { path: "/auth/login/forget", Component: ForgetPassword }
        ],
    },

    // private router
    {
        path: '/services',
        element:
            <PrivateRoutes>
                <Services></Services>
            </PrivateRoutes>,
        loader: () => fetch('/Pet_Care.json'),
        HydrateFallback: Loading
    },

    {
        path: '/services/:serviceId',
        element:
            <PrivateRoutes>
                <ServiceDetails></ServiceDetails>
            </PrivateRoutes>,
        loader: () => fetch('/Pet_Care.json'),
        HydrateFallback: Loading

    },
    {
        path: '/profile',
        element:
            <PrivateRoutes>
                <My_Profile></My_Profile>
            </PrivateRoutes>
    },
    {
        path: '/profile/update',
        element:
            <PrivateRoutes>
                <UpdateProfile></UpdateProfile>
            </PrivateRoutes>
    }
]);