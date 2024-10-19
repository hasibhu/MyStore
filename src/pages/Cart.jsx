
import { useSelector } from 'react-redux';
import { CartItemsList, CartTotals, SectionTitle } from '../components';
import { Link } from 'react-router-dom';


const Cart = () => {
    const user = null;
    const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
    console.log(numItemsInCart);
    if (numItemsInCart === 0) {
        return <div className='pt-16'><SectionTitle text='Your cart is empty'></SectionTitle></div>
    }

    return (
        <>
            <div className='pt-10'>
                  <SectionTitle text={`Your cart has ${numItemsInCart} ${numItemsInCart === 1 ? 'product' : 'products'}`}></SectionTitle>
            </div>
            <div className='mt-8 grid lg:grid-cols-8 gap-8 '>
                <div className='lg:col-span-5 '>
                    <CartItemsList></CartItemsList>
                </div>
                <div className='lg:col-span-3 lg:pl-4'>
                  
                    <CartTotals></CartTotals>
                    {
                        user ? (<Link to={'/checkout'} className='btn btn-primary btn-block mt-8'>Proceed to checkout</Link>)
                            :
                            (<Link to={'/login'} className='btn btn-primary btn-block mt-8'>Please login</Link>)
                    }
                </div>
            </div>
        </>
    );
};

export default Cart;