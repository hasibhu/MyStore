import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { generateAmountOptions } from "../utils/generateAmountOptions";



const Singleproducts = () => {
    const data = useLoaderData()
    const [productColor, setProductColor] = useState(data?.data?.data?.attributes?.colors[0]);
    // console.log(data?.data?.data?.attributes);

    const [amount, setAmount] = useState(1);

    const handleAmount = (e) => {
        setAmount(parseInt(e.target.value));
    };

    

    return (
        <section>
            <div className="text-xl breadcrumbs mt-10">
                <ul >
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/products'}>Products</Link>
                    </li>
                </ul>
            </div>
            
            <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16 ">
                <img src={data?.data?.data?.attributes?.image} alt="" className="w-96 h-96 object-cover lg:w-full" />


        
                <h1 className='capitalize text-3xl font-bold'>{data?.data?.data?.attributes?.title}</h1>
                <h4 className='text-xl text-neutral-content font-bold mt-2'>
                    {data?.data?.data?.attributes?.company}
                </h4>
                <p className='mt-3 text-xl'>{data?.data?.data?.attributes?.dollarsAmount}</p>
                <p className='mt-6 leading-8'>{data?.data?.data?.attributes?.description}</p>
                {/* COLORS */}
                <div className='mt-6'>
                    <h4 className='text-md font-medium tracking-wider capitalize'>
                        colors
                    </h4>
                    <div className='mt-2'>
                        {data?.data?.data?.attributes?.colors?.map((color) => {
                            return (
                                <button
                                    key={color}
                                    type='button'
                                    className={`badge w-6 h-6 mr-2 ${color === productColor && 'border-2 border-secondary'
                                                    }`}
                                    style={{ backgroundColor: color }}
                                        onClick={() => setProductColor(color)}
                                ></button>
                                    );
                                    })
                                }
                    </div>


                    {/* AMOUNT */}
                <div className='form-control w-full max-w-xs'>
                    <label className='label' htmlFor='amount'>
                    <h4 className='text-md font-medium -tracking-wider capitalize'>
                        amount
                    </h4>
                    </label>
                    <select
                        className='select select-secondary select-bordered select-md'
                        id='amount'
                        value={amount}
                        onChange={handleAmount}
                        >
                            {generateAmountOptions(20)}
                            {/* <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option> */}
                    </select>
                </div>

                    {/* cart button  */}
                <div className="mt-6">
                        <button className="btn btn-secondary btn-md"
                        onClick={()=> console.log("add to bag")}
                        >
                         Add to Bag   
                    </button>
                </div>

                </div>
            </div>
        </section>
    );
};

export default Singleproducts;