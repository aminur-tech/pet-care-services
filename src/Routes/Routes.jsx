import React from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../Pages/Home';
import Login from '../Component/Login';
import SignUp from '../Component/SignUp';
import AuthLayOut from '../Layouts/AuthLayOut';
import Loading from '../Component/Loading';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [{
            index: true,
            path: '/',
            Component: Home,
            loader: async () => {
                const [data1, data2] = await Promise.all([
                    fetch('/Pet_Care.json'),
                    fetch('/hero_data.json'),
                ]);

                const petCareData = await data1.json();
                const heroData = await data2.json();


                return { petCareData, heroData }
            },
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
]);