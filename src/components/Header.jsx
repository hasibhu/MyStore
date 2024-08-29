import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-neutral py-2 text-neutral-content'>
            <div className='align-element flex justify-center sm:justify-end'>

                <div >
                    <Link to={'/login'} className='link link-hover text-xs sm:text-sm mr-6'>Sign in / Guest</Link>
                    <Link to={'/register'} className='link link-hover text-xs sm:text-sm'>Create an account</Link>
                </div>

            </div>
        </header>
    );
};

export default Header;