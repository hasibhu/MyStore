import { createSlice } from "@reduxjs/toolkit"



const defaultState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    shipping: 500,
    tax: 0,
    orderTotal:0
}

const cartSlice = createSlice({
    name: "cart",
    initialState: defaultState,
    reducers: {
        addItem: (state, action) => {
            const { product } = action.payload;
            const item = state.cartItems.find((i) => i.cardID === product.cardID)
            
            if (item) {
                item.amount+=product.amount
            } else {
                state.cartItems.push(product)
            }

            state.numItemsInCart += product.amount;
            state.cartTotal += product.price * product.amount;
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.shipping + state.tax;
        },
        clearCart: (state) => { },
        removeItem: (state, action) => { },
        editItem: (state, action) => { }, 
    }
});


export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;


export default cartSlice.reducer;