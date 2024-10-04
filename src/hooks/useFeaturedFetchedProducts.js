// src/hooks/useFetchProducts.js
import { useEffect, useState } from "react";
import { customFetch } from "../utils";

const url = "/products?featured=true";

const useFetchProducts = () => {
    const [products, setProducts] = useState([]);  // State to store the fetched products
    const [loading, setLoading] = useState(true);  // State to handle loading
    const [error, setError] = useState(null);      // State to handle errors

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await customFetch(url);
                const productsData = response?.data?.data;  // Fetch the products array
                setProducts(productsData);  // Store the products in state
            } catch (error) {
                setError(error);
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);  // Stop the loading indicator
            }
        };

        fetchProducts();  
    }, []);  // Empty dependency array to run only once on mount

    return { products, loading, error };  // Return the products, loading state, and error
};

export default useFetchProducts;
