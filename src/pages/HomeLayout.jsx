
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { Header} from '../components';



const HomeLayout = () => {
    return (
        <div className='lg:w-[1080px] mx-auto'>
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;