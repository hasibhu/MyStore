import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { Header } from '../components';


const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;