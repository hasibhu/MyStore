
import Filters from '../components/Products/Filters';
import ProductContainer from '../components/Products/ProductContainer'
import Pagination from '../components/Products/Pagination'
import { customFetch } from '../utils';

const url = '/products';

export const loader = async ({ resuest }) =>{
    const response = await customFetch(url);
    const products = response.data.data;
    const meta = response.data.meta;
    return { products, meta }
};

const Products = () => {
     

    return (
        <div>
            <h2>All products will be here </h2>
            <Filters></Filters>
            <ProductContainer></ProductContainer>
            <Pagination></Pagination>
        </div>
    );
};

export default Products;