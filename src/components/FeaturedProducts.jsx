
import ProductGrid from "./ProductGrid";
import SectionTitle from "./SectionTitle";


const FeaturedProducts = ({}) => {
    return (
        <div className="mt-16">
            <SectionTitle text={'Featured Products'}></SectionTitle>
            <ProductGrid ></ProductGrid>
        </div>
    );
};

export default FeaturedProducts;