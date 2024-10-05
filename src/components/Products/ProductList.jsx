import { Link, useLoaderData } from "react-router-dom";



const ProductList = () => {
    const {products} = useLoaderData()
    // console.log(products);

    return (
      
        <div className="mt-12 grid gap-y-8 ">
            {products.map((product) => {
                const { title, price, image, company } = product.attributes;
                const dollarsAmount = (price/100);
                return (
                    <Link
                        key={product.id}
                        to={`/products/${product.id}`}
                        className=' bg-base-200 p-8 rounded-xl flex flex-col flex-wrap sm:flex-row gap-y-5  shadow-xl hover:shadow-2xl duration-300 group' // Add mx-auto here
                    >
                        <figure className='px-4 pt-4'>
                            <img
                                src={image}
                                alt={title}
                                className='rounded-lg h-24 w-24 sm:h-32 sm:w-32 group-hover:scale-105 transition duration-300  object-cover'
                            />
                        </figure>
                        <div className='card-body items-center text-center'>
                            <h2 className='card-title text-2xl capitalize tracking-wider'>{title}</h2>
                            <h2 className='card-title capitalize text-sm tracking-wider'>{company}</h2>
                            <span className='text-secondary'>${dollarsAmount}</span>
                        </div>
                    </Link>
                );
            })}
        </div>
    


    );
};

export default ProductList;