
import { FeaturedProducts, Hero } from '../components';
import { customFetch } from '../utils';

const url =  '/products?featured=true'

 export const loader = async () => {
    const response = await customFetch(url);
    const products = response?.data?.data;
    // console.log(products);
    return {products};
}

// const productsList = loader();

const Landing = () => {
    return (
        <div>
            <Hero></Hero>
            <FeaturedProducts ></FeaturedProducts>
        </div>
    );
};

export default Landing;