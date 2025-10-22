import React from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../Pages/Home';
import Login from '../Component/Login';
import SignUp from '../Component/SignUp';
import AuthLayOut from '../Layouts/AuthLayOut';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [{
            index: true,
            path: '/',
            Component: Home

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