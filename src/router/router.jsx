import { createBrowserRouter } from "react-router-dom";
import { About, Cart, Checkout, Error,  HomeLayout, Landing, Login, Orders, Products, Register, SingleProducts } from "../pages";
import { ErrorElement } from '../components'
import { customFetch } from "../utils";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Landing />,
                errorElement: <ErrorElement></ErrorElement>,
                
            },
            {
                path: '/products',
                element: <Products></Products>, 
                 errorElement: <ErrorElement></ErrorElement>
            },
            {
                path: 'products/:id',
                element: <SingleProducts></SingleProducts>, 
                loader: async ({ params }) => await customFetch(`/products/${params.id}`)
                
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
