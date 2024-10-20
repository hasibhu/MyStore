import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './cart/cartSlice'
import userReducer from './user/userSlice'


export const store = configureStore({
    reducer: {
        cartState: cartReducer,
        userState: userReducer,
    }
});

