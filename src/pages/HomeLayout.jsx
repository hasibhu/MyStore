import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-center p-10'>We are at home page</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;