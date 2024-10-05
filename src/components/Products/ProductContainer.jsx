import React from 'react';
import useAllFetchProducts from '../../hooks/useAllFetchedProducts';

const ProductContainer = () => {
    const { products, loading, error } = useAllFetchProducts();  
    const ProductsList = products.data;
    const meta = products.meta;
    console.log(meta, ProductsList);
    return (
        <div>
            <h2>{ProductsList?.length}</h2>
        </div>
    );
};

export default ProductContainer;