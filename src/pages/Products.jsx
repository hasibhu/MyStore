
import Filters from '../components/Products/Filters';
import ProductContainer from '../components/Products/ProductContainer'
import Pagination from '../components/Products/Pagination'



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