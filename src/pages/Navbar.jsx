import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-around items-center'>
            <div>
                <h2 className='text-4xl text-primary'>Comfy</h2>
            </div>
            
            <div className='flex gap-6'>
                <Link to={"/"}>
                <button className='btn btn-accent'>Home</button></Link>
                <Link to={"products"}>
                      <button className='btn btn-accent'>Products</button>
                </Link>
                <Link to={"about"}>
                      <button className='btn btn-accent'>About</button>
                </Link>
                <Link to={"checkOut"}>
                <button className='btn btn-accent'>Checkout</button></Link>
                <Link to={"/login"}>
                <button className='btn btn-accent'>Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;