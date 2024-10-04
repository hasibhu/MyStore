import { Link } from "react-router-dom";
import useFetchProducts from "../hooks/useFeaturedFetchedProducts";



const ProductGrid = () => {

    const { products, loading, error } = useFetchProducts();  // Use the custom hook to get products

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error fetching products: {error.message}</p>;
    }
console.log(products);

    return (
      
            <div className="pt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-3 justify-items-center ">
            {products.map((product) => {
                const { title, price, image } = product.attributes;
                const dollarsAmount = (price/100);
                return (
                    <Link
                        key={product.id}
                        to={`/products/${product.id}`}
                        className='card w-full shadow-xl hover:shadow-2xl transition duration-300 mx-auto' // Add mx-auto here
                    >
                        <figure className='px-4 pt-4'>
                            <img
                                src={image}
                                alt={title}
                                className='rounded-xl h-64 md:h-48 w-full object-cover'
                            />
                        </figure>
                        <div className='card-body items-center text-center'>
                            <h2 className='card-title capitalize tracking-wider'>{title}</h2>
                            <span className='text-secondary'>${dollarsAmount}</span>
                        </div>
                    </Link>
                );
            })}
        </div>
    


    );
};

export default ProductGrid;