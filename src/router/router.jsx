import { createBrowserRouter } from "react-router-dom";
import { About, Cart, Checkout, Error, HomeLayout, Login, Orders, Products, Register, SingleProducts } from "../pages";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: 'products',
                element: <Products></Products>, 
            },
            {
                path: 'products/:id',
                element: <SingleProducts></SingleProducts>, 
                
            },
            {
                path: 'orders',
                element: <Orders></Orders>, 
            },
            {
                path: 'checkOut',
                element: <Checkout></Checkout>, 
                
            },
            {
                path: 'cart',
                element: <Cart></Cart>, 
                
            },
            {
                path: 'about',
                element: <About></About>, 
            },
        ]
    },
    {
        path: '/login',
        element: <Login></Login>,
        errorElement: <Error></Error>,
        
    },
    {
        path: '/register',
        element: <Register></Register>,
        errorElement: <Error></Error>,
        
    }
])

export default router;
