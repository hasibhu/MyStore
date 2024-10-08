import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import FormRange from "../Formrange";
import FormCheckbox from "../FormCheckbox";


const Filters = () => {
    const { meta, params } = useLoaderData();

    const { search, company, category, shipping, order, price} = params;


    return (
        <Form className="bg-gray-300 rounded-md px-8 py-4 gap-x-4 gap-y-8 grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center mt-1 ">

            {/* search */}
            <FormInput type='Search' label='Search Products' name='search' size='input-sm' defaultValue={search}></FormInput>
            
            {/* categories  */}
            <FormSelect label='Select Category' name='category' list={meta.categories} size='select-sm' defaultValue={category}></FormSelect>

            {/* company  */}
            <FormSelect label='Select Company' name='company' list={meta.companies} size='select-sm' defaultValue={company}></FormSelect>

            {/* Sort / order  */}
            <FormSelect label='Sort By' name='order' list={['a-z', 'z-a', 'high', 'low']} size='select-sm' defaultValue={order}></FormSelect>

            {/* price range  */}
            <FormRange name='price' label='Select Price' size='range-sm' price={price} ></FormRange>

            {/* Free shipping  */}
            <FormCheckbox label='Free Shipping' name='shipping' size='checkbox-sm' defaultValue={shipping}></FormCheckbox>
            
            {/* buttons  */}
            <button type="submit" className="btn btn-primary btn-sm">Search</button>
            <Link to={'/products'} className="btn btn-accent btn-sm"> Reset</Link>
        </Form>
    );
};

export default Filters;