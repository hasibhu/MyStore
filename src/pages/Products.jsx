
import Filters from '../components/Products/Filters';
import ProductContainer from '../components/Products/ProductContainer'
import Pagination from '../components/Products/Pagination'
import { customFetch } from '../utils';

const url = '/products';

export const loader = async ({ request }) => {
    // test 
    // const params = new URL(request.url).searchParams;
    // const search = params.get('search')
    // console.log(search);

    const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])

    const response = await customFetch(url, {params});
    const products = response.data.data;
    const meta = response.data.meta;
    return { products, meta }
};


const Products = () => {
     

    return (
        <div>
          
            <Filters></Filters>
            <ProductContainer></ProductContainer>
            <Pagination></Pagination>
        </div>
    );
};

export default Products;