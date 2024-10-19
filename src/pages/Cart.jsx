import React from 'react';
import { CartItemsList, CartTotals, SectionTitle } from '../components';

const Cart = () => {
    return (
        <div className='flex justify-center items-center mt-10 '>
            <SectionTitle SectionTitle={Cart }></SectionTitle>

            <CartItemsList></CartItemsList>
            <CartTotals></CartTotals>
        </div>
    );
};

export default Cart;