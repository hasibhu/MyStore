
import Navbar from './Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import { Header, Loading} from '../components';



const HomeLayout = () => {
    const navigation = useNavigation();
    const isPageLoading = navigation.state === 'loading'
    
    return (
        <div className='lg:w-[1080px] mx-auto'>
            <Header></Header>
            <Navbar></Navbar>
            {
                isPageLoading ? <Loading></Loading> : <Outlet></Outlet>
            }
        </div>
    );
};

export default HomeLayout;