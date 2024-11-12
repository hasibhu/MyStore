
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {clearCart} from '../redux/cart/cartSlice'
import {logoutUser} from '../redux/user/userSlice'
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user  = useSelector((state)=> state?.userState?.user)
    console.log(user);
    const handleLogout = () => {
        navigate('/')
        dispatch(clearCart())
        dispatch(logoutUser())
    }

    return (
        <header className='bg-neutral py-2 text-neutral-content'>
            <div className='align-element flex justify-center sm:justify-end'>
                {
                    user ? <div className="flex gap-x sm:gap-x-8 items-center"> <p>Hello, {user?.username}</p>
                        <button onClick={handleLogout} className='btn btn-xs btn-outline btn-primary'>Logout</button>
                    </div>
                    
                        : 

                        <div >
                            <Link to={'/login'} className='link link-hover text-xs sm:text-sm mr-6'>Sign in / Guest</Link>
                            <Link to={'/register'} className='link link-hover text-xs sm:text-sm'>Create an account</Link>
                        </div>
                }
                

            </div>
        </header>
    );
};

export default Header;